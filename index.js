    // ======================== COMPLETE DATABASE with Continents ========================
    const continentMap = {
      "Afghanistan":"Asia","Albania":"Europe","Algeria":"Africa","Andorra":"Europe","Angola":"Africa","Argentina":"South America","Armenia":"Asia","Australia":"Oceania","Austria":"Europe","Bangladesh":"Asia","Belgium":"Europe","Brazil":"South America","Canada":"North America","China":"Asia","Denmark":"Europe","Egypt":"Africa","France":"Europe","Germany":"Europe","India":"Asia","Indonesia":"Asia","Iran":"Asia","Iraq":"Asia","Italy":"Europe","Japan":"Asia","Mexico":"North America","Netherlands":"Europe","Nigeria":"Africa","Norway":"Europe","Pakistan":"Asia","Russia":"Europe/Asia","Saudi Arabia":"Asia","South Africa":"Africa","South Korea":"Asia","Spain":"Europe","Sweden":"Europe","Switzerland":"Europe","Turkey":"Asia/Europe","United Kingdom":"Europe","United States":"North America","Vatican City":"Europe","Vietnam":"Asia"
    };
    function getContinent(country) { return continentMap[country] || (country.includes("Antarctica")?"Antarctica":"Other"); }

    const fullData = [
      { country: "Afghanistan", capital: "Kabul" }, { country: "Albania", capital: "Tirana" }, { country: "Algeria", capital: "Algiers" }, { country: "Andorra", capital: "Andorra la Vella" }, { country: "Angola", capital: "Luanda" }, { country: "Argentina", capital: "Buenos Aires" }, { country: "Armenia", capital: "Yerevan" }, { country: "Australia", capital: "Canberra" }, { country: "Austria", capital: "Vienna" }, { country: "Bangladesh", capital: "Dhaka" }, { country: "Belgium", capital: "Brussels" }, { country: "Brazil", capital: "Brasília" }, { country: "Canada", capital: "Ottawa" }, { country: "China", capital: "Beijing" }, { country: "Denmark", capital: "Copenhagen" }, { country: "Egypt", capital: "Cairo" }, { country: "France", capital: "Paris" }, { country: "Germany", capital: "Berlin" }, { country: "India", capital: "New Delhi" }, { country: "Indonesia", capital: "Jakarta" }, { country: "Italy", capital: "Rome" }, { country: "Japan", capital: "Tokyo" }, { country: "Mexico", capital: "Mexico City" }, { country: "Netherlands", capital: "Amsterdam" }, { country: "Nigeria", capital: "Abuja" }, { country: "Norway", capital: "Oslo" }, { country: "Pakistan", capital: "Islamabad" }, { country: "Russia", capital: "Moscow" }, { country: "Saudi Arabia", capital: "Riyadh" }, { country: "South Africa", capital: "Pretoria" }, { country: "South Korea", capital: "Seoul" }, { country: "Spain", capital: "Madrid" }, { country: "Sweden", capital: "Stockholm" }, { country: "Switzerland", capital: "Bern" }, { country: "Turkey", capital: "Ankara" }, { country: "United Kingdom", capital: "London" }, { country: "United States", capital: "Washington, D.C." }, { country: "Vietnam", capital: "Hanoi" }
    ];
    const allCountries = fullData;

    function getFlag(country) { return "🏳️"; }
    function getWikiUrl(c) { return `https://en.wikipedia.org/wiki/${encodeURIComponent(c.replace(/ /g, '_'))}`; }

    let favorites = new Set(JSON.parse(localStorage.getItem('favs') || '[]'));
    let visited = new Set(JSON.parse(localStorage.getItem('visited') || '[]'));
    let clickCounts = JSON.parse(localStorage.getItem('clicks') || '{}');
    let notes = JSON.parse(localStorage.getItem('notes') || '{}');
    let currentView = 'grid', searchTerm = '', showFavOnly = false, continentFilter = 'all', sortBy = 'default', randomOrder = [], quizMode = false, flashcardMode = false, quizScore = 0, currentQuiz = null, streak = 0, mastered = new Set(JSON.parse(localStorage.getItem('mastered') || '[]'));
    let comparisonSelected = [];

    function updateStorage() { localStorage.setItem('favs', JSON.stringify([...favorites])); localStorage.setItem('visited', JSON.stringify([...visited])); localStorage.setItem('clicks', JSON.stringify(clickCounts)); localStorage.setItem('mastered', JSON.stringify([...mastered])); }
    function showToast(msg) { document.getElementById('toastText').innerText = msg; const t = document.getElementById('toastMsg'); t.classList.remove('translate-x-[120%]'); t.classList.add('translate-x-0'); setTimeout(() => { t.classList.add('translate-x-[120%]'); t.classList.remove('translate-x-0'); }, 1800); }

    function filterAndSort() {
      let filtered = allCountries.filter(c => (!showFavOnly || favorites.has(c.country)) && (continentFilter === 'all' || getContinent(c.country) === continentFilter) && (searchTerm === '' || c.country.toLowerCase().includes(searchTerm.toLowerCase()) || c.capital.toLowerCase().includes(searchTerm.toLowerCase()) || (notes[c.country] || '').toLowerCase().includes(searchTerm.toLowerCase())));
      if (sortBy === 'reverse') filtered.reverse();
      else if (sortBy === 'capital') filtered.sort((a,b) => a.capital.localeCompare(b.capital));
      else if (sortBy === 'favorites') filtered.sort((a,b) => (favorites.has(b.country)?1:0) - (favorites.has(a.country)?1:0));
      else if (sortBy === 'visited') filtered.sort((a,b) => (clickCounts[b.country]||0) - (clickCounts[a.country]||0));
      else if (sortBy === 'random') { if(randomOrder.length===0) randomOrder = [...filtered].sort(()=>Math.random()-0.5); return randomOrder; }
      else filtered.sort((a,b)=>a.country.localeCompare(b.country));
      return filtered;
    }

    function render() {
      if(quizMode) { document.getElementById('quizPanel')?.classList.remove('hidden'); document.getElementById('flashcardPanel')?.classList.add('hidden'); renderQuiz(); return; }
      if(flashcardMode) { document.getElementById('flashcardPanel')?.classList.remove('hidden'); document.getElementById('quizPanel')?.classList.add('hidden'); return; }
      document.getElementById('quizPanel')?.classList.add('hidden'); document.getElementById('flashcardPanel')?.classList.add('hidden');
      const filtered = filterAndSort();
      document.getElementById('totalCountDisplay').innerText = filtered.length;
      document.getElementById('favoriteCountDisplay').innerHTML = `⭐ ${favorites.size} favorites`;
      document.getElementById('visitedCountDisplay').innerHTML = `✈️ ${visited.size} visited`;
      const container = document.getElementById('capitalsContainer');
      const gridClass = currentView === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5' : 'flex flex-col gap-3';
      container.className = `transition-all duration-300 ${gridClass}`;
      if(filtered.length===0) { container.innerHTML = '<div class="col-span-full text-center py-16 bg-white/40 rounded-3xl">✨ No matches ✨</div>'; return; }
      container.innerHTML = '';
      filtered.forEach(item => {
        const isFav = favorites.has(item.country);
        const visitCount = clickCounts[item.country] || 0;
        const card = document.createElement('button');
        card.className = `w-full text-left bg-white dark:bg-slate-800/90 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-400 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group cursor-pointer`;
        card.innerHTML = `
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-2xl">${getFlag(item.country)}</span>
                <span class="font-extrabold text-gray-800 dark:text-white group-hover:text-orange-600">${item.country}</span>
                <span class="cursor-pointer text-lg ${isFav ? 'text-yellow-500' : 'text-gray-400'} hover:scale-125 transition star-btn" data-country="${item.country}">${isFav ? '★' : '☆'}</span>
                <span class="cursor-pointer text-lg text-blue-500 hover:scale-110 transition visited-btn" data-country="${item.country}">${visited.has(item.country) ? '✓' : '○'}</span>
              </div>
              <div class="flex items-center gap-2 mt-2 flex-wrap">
                <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">🏛️ ${item.capital}</span>
                <span class="cursor-pointer text-xs speaker-btn text-purple-500" data-capital="${item.capital}">🔊</span>
                <span class="text-xs text-gray-400">📚 ${visitCount}</span>
                ${visitCount > 5 ? '<span class="text-xs">🔥</span>' : ''}
              </div>
              <button class="text-xs text-gray-400 hover:text-orange-500 add-note-btn mt-1" data-country="${item.country}">📝 ${notes[item.country] ? 'Edit note' : 'Add note'}</button>
            </div>
            <div class="flex items-center gap-2">
              <button class="compare-checkbox w-5 h-5 border-2 border-orange-400 rounded ${comparisonSelected.includes(item.country) ? 'bg-orange-500' : ''}" data-country="${item.country}"></button>
              <span class="text-xl transition-transform group-hover:translate-x-1 wiki-link" data-country="${item.country}">📖</span>
            </div>
          </div>
        `;
        card.querySelector('.wiki-link')?.addEventListener('click', (e) => { e.stopPropagation(); clickCounts[item.country] = (clickCounts[item.country]||0)+1; updateStorage(); window.open(getWikiUrl(item.country), '_blank'); showToast(`📖 Opening ${item.country}`); });
        card.querySelector('.star-btn')?.addEventListener('click', (e) => { e.stopPropagation(); if(favorites.has(item.country)) favorites.delete(item.country); else favorites.add(item.country); updateStorage(); render(); showToast(favorites.has(item.country)?`⭐ Added ${item.country}`:`💔 Removed ${item.country}`); });
        card.querySelector('.visited-btn')?.addEventListener('click', (e) => { e.stopPropagation(); if(visited.has(item.country)) visited.delete(item.country); else visited.add(item.country); updateStorage(); render(); });
        card.querySelector('.speaker-btn')?.addEventListener('click', (e) => { e.stopPropagation(); const u = new SpeechSynthesisUtterance(item.capital); u.lang='en'; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); });
        card.querySelector('.add-note-btn')?.addEventListener('click', (e) => { e.stopPropagation(); const n = prompt('Enter note for '+item.country, notes[item.country]||''); if(n!==null) { notes[item.country]=n; localStorage.setItem('notes', JSON.stringify(notes)); render(); showToast('📝 Note saved'); } });
        card.querySelector('.compare-checkbox')?.addEventListener('click', (e) => { e.stopPropagation(); if(comparisonSelected.includes(item.country)) comparisonSelected = comparisonSelected.filter(c=>c!==item.country); else if(comparisonSelected.length<3) comparisonSelected.push(item.country); render(); updateComparisonPanel(); });
        container.appendChild(card);
      });
      updateActiveFiltersUI();
    }

    function updateComparisonPanel() { const p = document.getElementById('comparisonPanel'); if(comparisonSelected.length>=2) p.classList.remove('translate-x-full'); else p.classList.add('translate-x-full'); const c = document.getElementById('comparisonContent'); if(comparisonSelected.length<2) return; c.innerHTML = '<table class="w-full text-xs"><tr><th>Country</th><th>Capital</th><th>Visits</th></tr>' + comparisonSelected.map(cnt=>`<tr><td>${cnt}</td><td>${allCountries.find(c=>c.country===cnt)?.capital}</td><td>${clickCounts[cnt]||0}</td></tr>`).join('') + '</table>'; }
    function updateActiveFiltersUI() { const div = document.getElementById('activeFiltersContainer'); div.innerHTML = ''; if(showFavOnly) div.innerHTML += `<span class="bg-orange-100 dark:bg-orange-900 rounded-full px-3 py-1 text-xs">⭐ Favorites only <button class="ml-1 remove-filter" data-type="fav">✖</button></span>`; if(continentFilter!=='all') div.innerHTML += `<span class="bg-blue-100 dark:bg-blue-900 rounded-full px-3 py-1 text-xs">🌎 ${continentFilter} <button class="ml-1 remove-filter" data-type="continent">✖</button></span>`; if(searchTerm) div.innerHTML += `<span class="bg-green-100 dark:bg-green-900 rounded-full px-3 py-1 text-xs">🔍 "${searchTerm}" <button class="ml-1 remove-filter" data-type="search">✖</button></span>`; document.querySelectorAll('.remove-filter').forEach(btn => btn.addEventListener('click', (e) => { if(btn.dataset.type==='fav') showFavOnly=false; if(btn.dataset.type==='continent') continentFilter='all'; if(btn.dataset.type==='search') { searchTerm=''; document.getElementById('searchInput').value=''; } render(); })); }

    function renderQuiz() { const all = allCountries.filter(c=>!mastered.has(c.country)); if(all.length===0) { showToast('🏆 You mastered all countries! Resetting...'); mastered.clear(); } const random = all[Math.floor(Math.random()*all.length)]; if(!random) return; const wrong = allCountries.filter(c=>c.country!==random.country).sort(()=>Math.random()-0.5).slice(0,3); const options = [random.country, ...wrong.map(c=>c.country)].sort(()=>Math.random()-0.5); document.getElementById('quizCapitalTarget').innerText = random.capital; document.getElementById('quizScore').innerText = quizScore; const optsDiv = document.getElementById('quizOptions'); optsDiv.innerHTML = options.map(opt => `<button class="bg-white/20 hover:bg-white/30 rounded-xl p-3 font-semibold quiz-opt" data-answer="${opt}">${opt}</button>`).join(''); document.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => { if(btn.dataset.answer === random.country) { quizScore++; showToast('✅ Correct!'); mastered.add(random.country); updateStorage(); } else { showToast(`❌ Wrong! The answer is ${random.country}`); quizScore = Math.max(0, quizScore-0.5); } document.getElementById('quizScoreDisplay').innerText = `🎮 Score: ${Math.floor(quizScore)}`; renderQuiz(); })); }

    // Event listeners
    document.getElementById('searchInput')?.addEventListener('input', (e) => { searchTerm = e.target.value; document.getElementById('clearSearchBtn').classList.toggle('hidden', !searchTerm); render(); });
    document.getElementById('clearSearchBtn')?.addEventListener('click', () => { searchTerm=''; document.getElementById('searchInput').value=''; render(); });
    document.getElementById('gridViewToggle')?.addEventListener('click', () => { currentView='grid'; render(); });
    document.getElementById('listViewToggle')?.addEventListener('click', () => { currentView='list'; render(); });
    document.getElementById('quizModeToggle')?.addEventListener('click', () => { quizMode=!quizMode; flashcardMode=false; if(quizMode) quizScore=0; render(); });
    document.getElementById('flashcardModeToggle')?.addEventListener('click', () => { flashcardMode=!flashcardMode; quizMode=false; render(); });
    document.getElementById('darkModeToggle')?.addEventListener('click', () => { document.documentElement.classList.toggle('dark'); localStorage.setItem('dark', document.documentElement.classList.contains('dark')); });
    document.getElementById('continentFilter')?.addEventListener('change', (e) => { continentFilter=e.target.value; render(); });
    document.getElementById('sortBy')?.addEventListener('change', (e) => { sortBy=e.target.value; if(sortBy==='random') randomOrder=[]; render(); });
    document.getElementById('reshuffleBtn')?.addEventListener('click', () => { randomOrder=[]; render(); });
    document.getElementById('randomCountryBtn')?.addEventListener('click', () => { const rand = allCountries[Math.floor(Math.random()*allCountries.length)]; showToast(`🎲 Random: ${rand.country} → ${rand.capital}`); });
    document.getElementById('exportCSVBtn')?.addEventListener('click', () => { let csv = "Country,Capital,Favorite,Visits\n"+allCountries.map(c=>`${c.country},${c.capital},${favorites.has(c.country)?"Yes":"No"},${clickCounts[c.country]||0}`).join('\n'); const blob = new Blob([csv], {type:'text/csv'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`capitals_${new Date().toISOString().slice(0,10)}.csv`; a.click(); showToast('📎 Exported CSV'); });
    document.getElementById('resetCountersBtn')?.addEventListener('click', () => { if(confirm('Reset all visit counters?')) { clickCounts={}; updateStorage(); render(); showToast('Counters reset'); } });
    document.getElementById('shareUrlBtn')?.addEventListener('click', () => { const params = new URLSearchParams({ search: searchTerm, fav: showFavOnly, continent: continentFilter, view: currentView }); const url = `${window.location.origin}${window.location.pathname}?${params}`; navigator.clipboard.writeText(url); showToast('🔗 URL copied!'); });
    document.getElementById('closeComparisonBtn')?.addEventListener('click', () => { document.getElementById('comparisonPanel').classList.add('translate-x-full'); });
    document.getElementById('clearComparisonBtn')?.addEventListener('click', () => { comparisonSelected=[]; render(); updateComparisonPanel(); });
    document.getElementById('favoriteCountBtn')?.addEventListener('click', () => { showFavOnly=!showFavOnly; render(); });
    document.getElementById('voiceSearchBtn')?.addEventListener('click', () => { const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; if(SpeechRecognition) { const rec = new SpeechRecognition(); rec.onresult = (e) => { searchTerm = e.results[0][0].transcript; document.getElementById('searchInput').value = searchTerm; render(); }; rec.start(); showToast('🎤 Listening...'); } else showToast('Voice not supported'); });

    if(document.documentElement.classList.contains('dark')) document.getElementById('darkModeToggle').innerHTML = '☀️ Light';
    setInterval(() => { document.getElementById('statsTime').innerHTML = `🕒 ${new Date().toLocaleTimeString()}`; }, 1000);
    render();
