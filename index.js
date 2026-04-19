// ========== COMPLETE LIST OF COUNTRIES & CAPITALS ==========
const COUNTRIES_CAPITALS = [
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Albania", capital: "Tirana" },
    { country: "Algeria", capital: "Algiers" },
    { country: "Andorra", capital: "Andorra la Vella" },
    { country: "Angola", capital: "Luanda" },
    { country: "Antigua and Barbuda", capital: "St. John's" },
    { country: "Argentina", capital: "Buenos Aires" },
    { country: "Armenia", capital: "Yerevan" },
    { country: "Australia", capital: "Canberra" },
    { country: "Austria", capital: "Vienna" },
    { country: "Azerbaijan", capital: "Baku" },
    { country: "Bahamas", capital: "Nassau" },
    { country: "Bahrain", capital: "Manama" },
    { country: "Bangladesh", capital: "Dhaka" },
    { country: "Barbados", capital: "Bridgetown" },
    { country: "Belarus", capital: "Minsk" },
    { country: "Belgium", capital: "Brussels" },
    { country: "Belize", capital: "Belmopan" },
    { country: "Benin", capital: "Porto-Novo" },
    { country: "Bhutan", capital: "Thimphu" },
    { country: "Bolivia", capital: "La Paz" },
    { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
    { country: "Botswana", capital: "Gaborone" },
    { country: "Brazil", capital: "Brasília" },
    { country: "Brunei", capital: "Bandar Seri Begawan" },
    { country: "Bulgaria", capital: "Sofia" },
    { country: "Burkina Faso", capital: "Ouagadougou" },
    { country: "Burundi", capital: "Gitega" },
    { country: "Cabo Verde", capital: "Praia" },
    { country: "Cambodia", capital: "Phnom Penh" },
    { country: "Cameroon", capital: "Yaoundé" },
    { country: "Canada", capital: "Ottawa" },
    { country: "Central African Republic", capital: "Bangui" },
    { country: "Chad", capital: "N'Djamena" },
    { country: "Chile", capital: "Santiago" },
    { country: "China", capital: "Beijing" },
    { country: "Colombia", capital: "Bogotá" },
    { country: "Comoros", capital: "Moroni" },
    { country: "Congo", capital: "Brazzaville" },
    { country: "Costa Rica", capital: "San José" },
    { country: "Côte d'Ivoire", capital: "Yamoussoukro" },
    { country: "Croatia", capital: "Zagreb" },
    { country: "Cuba", capital: "Havana" },
    { country: "Cyprus", capital: "Nicosia" },
    { country: "Czech Republic", capital: "Prague" },
    { country: "Denmark", capital: "Copenhagen" },
    { country: "Djibouti", capital: "Djibouti" },
    { country: "Dominica", capital: "Roseau" },
    { country: "Dominican Republic", capital: "Santo Domingo" },
    { country: "Ecuador", capital: "Quito" },
    { country: "Egypt", capital: "Cairo" },
    { country: "El Salvador", capital: "San Salvador" },
    { country: "Equatorial Guinea", capital: "Malabo" },
    { country: "Eritrea", capital: "Asmara" },
    { country: "Estonia", capital: "Tallinn" },
    { country: "Eswatini", capital: "Mbabane" },
    { country: "Ethiopia", capital: "Addis Ababa" },
    { country: "Fiji", capital: "Suva" },
    { country: "Finland", capital: "Helsinki" },
    { country: "France", capital: "Paris" },
    { country: "Gabon", capital: "Libreville" },
    { country: "Gambia", capital: "Banjul" },
    { country: "Georgia", capital: "Tbilisi" },
    { country: "Germany", capital: "Berlin" },
    { country: "Ghana", capital: "Accra" },
    { country: "Greece", capital: "Athens" },
    { country: "Grenada", capital: "St. George's" },
    { country: "Guatemala", capital: "Guatemala City" },
    { country: "Guinea", capital: "Conakry" },
    { country: "Guinea-Bissau", capital: "Bissau" },
    { country: "Guyana", capital: "Georgetown" },
    { country: "Haiti", capital: "Port-au-Prince" },
    { country: "Honduras", capital: "Tegucigalpa" },
    { country: "Hungary", capital: "Budapest" },
    { country: "Iceland", capital: "Reykjavik" },
    { country: "India", capital: "New Delhi" },
    { country: "Indonesia", capital: "Jakarta" },
    { country: "Iran", capital: "Tehran" },
    { country: "Iraq", capital: "Baghdad" },
    { country: "Ireland", capital: "Dublin" },
    { country: "Israel", capital: "Jerusalem" },
    { country: "Italy", capital: "Rome" },
    { country: "Jamaica", capital: "Kingston" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Jordan", capital: "Amman" },
    { country: "Kazakhstan", capital: "Astana" },
    { country: "Kenya", capital: "Nairobi" },
    { country: "Kiribati", capital: "Tarawa" },
    { country: "Kuwait", capital: "Kuwait City" },
    { country: "Kyrgyzstan", capital: "Bishkek" },
    { country: "Laos", capital: "Vientiane" },
    { country: "Latvia", capital: "Riga" },
    { country: "Lebanon", capital: "Beirut" },
    { country: "Lesotho", capital: "Maseru" },
    { country: "Liberia", capital: "Monrovia" },
    { country: "Libya", capital: "Tripoli" },
    { country: "Liechtenstein", capital: "Vaduz" },
    { country: "Lithuania", capital: "Vilnius" },
    { country: "Luxembourg", capital: "Luxembourg" },
    { country: "Madagascar", capital: "Antananarivo" },
    { country: "Malawi", capital: "Lilongwe" },
    { country: "Malaysia", capital: "Kuala Lumpur" },
    { country: "Maldives", capital: "Malé" },
    { country: "Mali", capital: "Bamako" },
    { country: "Malta", capital: "Valletta" },
    { country: "Marshall Islands", capital: "Majuro" },
    { country: "Mauritania", capital: "Nouakchott" },
    { country: "Mauritius", capital: "Port Louis" },
    { country: "Mexico", capital: "Mexico City" },
    { country: "Micronesia", capital: "Palikir" },
    { country: "Moldova", capital: "Chișinău" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Mongolia", capital: "Ulaanbaatar" },
    { country: "Montenegro", capital: "Podgorica" },
    { country: "Morocco", capital: "Rabat" },
    { country: "Mozambique", capital: "Maputo" },
    { country: "Myanmar", capital: "Naypyidaw" },
    { country: "Namibia", capital: "Windhoek" },
    { country: "Nauru", capital: "Yaren" },
    { country: "Nepal", capital: "Kathmandu" },
    { country: "Netherlands", capital: "Amsterdam" },
    { country: "New Zealand", capital: "Wellington" },
    { country: "Nicaragua", capital: "Managua" },
    { country: "Niger", capital: "Niamey" },
    { country: "Nigeria", capital: "Abuja" },
    { country: "North Korea", capital: "Pyongyang" },
    { country: "North Macedonia", capital: "Skopje" },
    { country: "Norway", capital: "Oslo" },
    { country: "Oman", capital: "Muscat" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Palau", capital: "Ngerulmud" },
    { country: "Palestine", capital: "Ramallah" },
    { country: "Panama", capital: "Panama City" },
    { country: "Papua New Guinea", capital: "Port Moresby" },
    { country: "Paraguay", capital: "Asunción" },
    { country: "Peru", capital: "Lima" },
    { country: "Philippines", capital: "Manila" },
    { country: "Poland", capital: "Warsaw" },
    { country: "Portugal", capital: "Lisbon" },
    { country: "Qatar", capital: "Doha" },
    { country: "Romania", capital: "Bucharest" },
    { country: "Russia", capital: "Moscow" },
    { country: "Rwanda", capital: "Kigali" },
    { country: "Saint Kitts and Nevis", capital: "Basseterre" },
    { country: "Saint Lucia", capital: "Castries" },
    { country: "Saint Vincent and the Grenadines", capital: "Kingstown" },
    { country: "Samoa", capital: "Apia" },
    { country: "San Marino", capital: "San Marino" },
    { country: "Sao Tome and Principe", capital: "São Tomé" },
    { country: "Saudi Arabia", capital: "Riyadh" },
    { country: "Senegal", capital: "Dakar" },
    { country: "Serbia", capital: "Belgrade" },
    { country: "Seychelles", capital: "Victoria" },
    { country: "Sierra Leone", capital: "Freetown" },
    { country: "Singapore", capital: "Singapore" },
    { country: "Slovakia", capital: "Bratislava" },
    { country: "Slovenia", capital: "Ljubljana" },
    { country: "Solomon Islands", capital: "Honiara" },
    { country: "Somalia", capital: "Mogadishu" },
    { country: "South Africa", capital: "Pretoria" },
    { country: "South Korea", capital: "Seoul" },
    { country: "South Sudan", capital: "Juba" },
    { country: "Spain", capital: "Madrid" },
    { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" },
    { country: "Sudan", capital: "Khartoum" },
    { country: "Suriname", capital: "Paramaribo" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Switzerland", capital: "Bern" },
    { country: "Syria", capital: "Damascus" },
    { country: "Taiwan", capital: "Taipei" },
    { country: "Tajikistan", capital: "Dushanbe" },
    { country: "Tanzania", capital: "Dodoma" },
    { country: "Thailand", capital: "Bangkok" },
    { country: "Timor-Leste", capital: "Dili" },
    { country: "Togo", capital: "Lomé" },
    { country: "Tonga", capital: "Nukuʻalofa" },
    { country: "Trinidad and Tobago", capital: "Port of Spain" },
    { country: "Tunisia", capital: "Tunis" },
    { country: "Turkey", capital: "Ankara" },
    { country: "Turkmenistan", capital: "Ashgabat" },
    { country: "Tuvalu", capital: "Funafuti" },
    { country: "Uganda", capital: "Kampala" },
    { country: "Ukraine", capital: "Kyiv" },
    { country: "United Arab Emirates", capital: "Abu Dhabi" },
    { country: "United Kingdom", capital: "London" },
    { country: "United States", capital: "Washington, D.C." },
    { country: "Uruguay", capital: "Montevideo" },
    { country: "Uzbekistan", capital: "Tashkent" },
    { country: "Vanuatu", capital: "Port Vila" },
    { country: "Vatican City", capital: "Vatican City" },
    { country: "Venezuela", capital: "Caracas" },
    { country: "Vietnam", capital: "Hanoi" },
    { country: "Yemen", capital: "Sana'a" },
    { country: "Zambia", capital: "Lusaka" },
    { country: "Zimbabwe", capital: "Harare" }
];

// ========== STORAGE ==========
let customLinks = new Map();
let currentFilter = 'all';
let currentView = 'grid';
let searchTerm = '';

// Load saved links from localStorage
function loadSavedLinks() {
    const saved = localStorage.getItem('capitalLinks');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            customLinks = new Map(Object.entries(parsed));
        } catch(e) {}
    }
}

function saveLinks() {
    const obj = Object.fromEntries(customLinks);
    localStorage.setItem('capitalLinks', JSON.stringify(obj));
    updateLinkedCount();
}

function updateLinkedCount() {
    const linkedCount = document.getElementById('linkedCount');
    if (linkedCount) {
        linkedCount.innerText = customLinks.size;
    }
}

// ========== TOAST NOTIFICATION ==========
function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ========== OPEN LINK FUNCTION ==========
function openLink(url) {
    if (!url) return false;
    if (url.startsWith('file://')) {
        window.location.href = url;
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        window.open('https://' + url, '_blank', 'noopener,noreferrer');
    }
    return true;
}

// ========== FILTER & SEARCH ==========
function filterCountries() {
    let filtered = [...COUNTRIES_CAPITALS];
    
    // Apply search filter
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(item => 
            item.country.toLowerCase().includes(term) || 
            item.capital.toLowerCase().includes(term)
        );
    }
    
    // Apply link filter
    if (currentFilter === 'linked') {
        filtered = filtered.filter(item => customLinks.has(item.country));
    } else if (currentFilter === 'unlinked') {
        filtered = filtered.filter(item => !customLinks.has(item.country));
    }
    
    return filtered;
}

// ========== RENDER BUTTONS ==========
function renderButtons() {
    const container = document.getElementById('capitalButtonsContainer');
    if (!container) return;
    
    const filtered = filterCountries();
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-message">✨ No matching countries found ✨</div>';
        document.getElementById('totalCount').innerText = '0';
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    filtered.forEach((item, idx) => {
        const { country, capital } = item;
        const hasCustomLink = customLinks.has(country);
        
        const btn = document.createElement('button');
        btn.className = 'capital-btn';
        if (hasCustomLink) btn.classList.add('has-link');
        btn.style.setProperty('--index', idx);
        btn.setAttribute('data-country', country);
        
        const leftSpan = document.createElement('span');
        leftSpan.className = 'country-name';
        leftSpan.textContent = country;
        
        const rightWrapper = document.createElement('span');
        rightWrapper.className = 'right-badge';
        
        const capitalSpan = document.createElement('span');
        capitalSpan.className = 'capital-name';
        capitalSpan.textContent = capital;
        
        const linkIcon = document.createElement('span');
        linkIcon.className = 'arrow-symbol';
        linkIcon.textContent = hasCustomLink ? '🔗' : '↗';
        
        rightWrapper.appendChild(capitalSpan);
        rightWrapper.appendChild(linkIcon);
        
        btn.appendChild(leftSpan);
        btn.appendChild(rightWrapper);
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const existingLink = customLinks.get(country);
            
            if (existingLink) {
                openLink(existingLink);
                showToast(`🌍 Opening ${country}...`);
            } else {
                const newUrl = prompt(`🔗 Enter URL for ${country} (${capital}):`, "https://");
                if (newUrl && newUrl.trim()) {
                    let finalUrl = newUrl.trim();
                    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://') && !finalUrl.startsWith('file://')) {
                        finalUrl = 'https://' + finalUrl;
                    }
                    setCapitalLink(country, finalUrl);
                    showToast(`✅ Link saved for ${country}!`);
                }
            }
        });
        
        fragment.appendChild(btn);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
    document.getElementById('totalCount').innerText = filtered.length;
}

// ========== SET LINK ==========
window.setCapitalLink = function(countryName, url) {
    if (!countryName || typeof url !== 'string') {
        console.warn("setCapitalLink requires country name and URL");
        return false;
    }
    customLinks.set(countryName, url);
    saveLinks();
    renderButtons();
    updateLinkedCount();
    console.log(`✅ ${countryName} → ${url}`);
    return true;
};

// ========== GET LINK ==========
window.getCapitalLink = function(countryName) {
    return customLinks.get(countryName) || null;
};

// ========== REMOVE LINK ==========
window.removeCapitalLink = function(countryName) {
    if (customLinks.delete(countryName)) {
        saveLinks();
        renderButtons();
        updateLinkedCount();
        showToast(`❌ Link removed for ${countryName}`);
        return true;
    }
    return false;
};

// ========== EXPORT LINKS ==========
window.exportLinks = function() {
    const links = Object.fromEntries(customLinks);
    const dataStr = JSON.stringify(links, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `capital-links-${new Date().toISOString().slice(0,19)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('💾 Links exported!');
};

// ========== IMPORT LINKS ==========
window.importLinks = function(jsonData) {
    try {
        const links = JSON.parse(jsonData);
        for (const [country, url] of Object.entries(links)) {
            customLinks.set(country, url);
        }
        saveLinks();
        renderButtons();
        updateLinkedCount();
        showToast(`📥 Imported ${Object.keys(links).length} links`);
        return true;
    } catch(e) {
        showToast('❌ Invalid JSON');
        return false;
    }
};

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            if (clearBtn) {
                clearBtn.classList.toggle('visible', searchTerm.length > 0);
            }
            renderButtons();
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchTerm = '';
                clearBtn.classList.remove('visible');
                renderButtons();
            }
        });
    }
}

// ========== FILTER BUTTONS ==========
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderButtons();
        });
    });
}

// ========== VIEW TOGGLE ==========
function initViewToggle() {
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');
    const container = document.getElementById('capitalButtonsContainer');
    
    if (gridBtn && listBtn && container) {
        gridBtn.addEventListener('click', () => {
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
            container.classList.remove('list-view');
            currentView = 'grid';
        });
        
        listBtn.addEventListener('click', () => {
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
            container.classList.add('list-view');
            currentView = 'list';
        });
    }
}

// ========== DARK MODE ==========
function initDarkMode() {
    const themeBtn = document.getElementById('themeToggle');
    const isDark = localStorage.getItem('darkMode') === 'true';
    
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = '☀️ Light';
    }
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkNow = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkNow);
            themeBtn.textContent = isDarkNow ? '☀️ Light' : '🌙 Dark';
            showToast(isDarkNow ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
        });
    }
}

// ========== EXPORT BUTTON ==========
function initExport() {
    const exportBtn = document.getElementById('exportLinksBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            window.exportLinks();
        });
    }
}

// ========== INITIALIZE ==========
function init() {
    loadSavedLinks();
    initSearch();
    initFilters();
    initViewToggle();
    initDarkMode();
    initExport();
    renderButtons();
    updateLinkedCount();
    
    console.log("🌍 Ultimate World Capitals Dashboard Ready!");
    console.log(`📊 ${COUNTRIES_CAPITALS.length} countries loaded`);
    console.log(`🔗 ${customLinks.size} links saved`);
    console.log("💡 Commands: setCapitalLink('Country', 'URL') | getCapitalLink('Country') | removeCapitalLink('Country') | exportLinks()");
    
    // Pre-load Bangladesh link if not exists
    if (!customLinks.has("Bangladesh")) {
        setCapitalLink("Bangladesh", "DHAKA.html");
    }
}

// Start the app
init();