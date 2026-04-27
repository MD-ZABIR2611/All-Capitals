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

// ========== GET WIKIPEDIA LINK FOR ANY COUNTRY ==========
function getWikipediaLink(countryName) {
    // Special cases for countries with complex names
    const specialCases = {
        "Antigua and Barbuda": "Antigua_and_Barbuda",
        "Bosnia and Herzegovina": "Bosnia_and_Herzegovina",
        "Burkina Faso": "Burkina_Faso",
        "Cabo Verde": "Cabo_Verde",
        "Central African Republic": "Central_African_Republic",
        "Côte d'Ivoire": "Ivory_Coast",
        "Czech Republic": "Czech_Republic",
        "Dominican Republic": "Dominican_Republic",
        "Equatorial Guinea": "Equatorial_Guinea",
        "Eswatini": "Eswatini",
        "Marshall Islands": "Marshall_Islands",
        "North Korea": "North_Korea",
        "North Macedonia": "North_Macedonia",
        "Papua New Guinea": "Papua_New_Guinea",
        "Saint Kitts and Nevis": "Saint_Kitts_and_Nevis",
        "Saint Lucia": "Saint_Lucia",
        "Saint Vincent and the Grenadines": "Saint_Vincent_and_the_Grenadines",
        "Sao Tome and Principe": "São_Tomé_and_Príncipe",
        "Saudi Arabia": "Saudi_Arabia",
        "Sierra Leone": "Sierra_Leone",
        "Solomon Islands": "Solomon_Islands",
        "South Africa": "South_Africa",
        "South Korea": "South_Korea",
        "South Sudan": "South_Sudan",
        "Sri Lanka": "Sri_Lanka",
        "Timor-Leste": "East_Timor",
        "Trinidad and Tobago": "Trinidad_and_Tobago",
        "United Arab Emirates": "United_Arab_Emirates",
        "United Kingdom": "United_Kingdom",
        "United States": "United_States",
        "Vatican City": "Vatican_City"
    };
    
    if (specialCases[countryName]) {
        return `https://en.wikipedia.org/wiki/${specialCases[countryName]}`;
    }
    
    // For regular names: replace spaces with underscores
    let formattedName = countryName.replace(/ /g, "_");
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(formattedName)}`;
}

// ========== DOM ELEMENTS ==========
const container = document.getElementById('capitalButtonsContainer');
const totalCountSpan = document.getElementById('totalCount');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');
const themeToggle = document.getElementById('themeToggle');

// ========== STATE ==========
let currentView = 'grid';
let searchTerm = '';

// ========== TOAST NOTIFICATION ==========
function showToast(message, duration = 2000) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ========== OPEN WIKIPEDIA ==========
function openWikipedia(countryName) {
    const url = getWikipediaLink(countryName);
    window.open(url, '_blank', 'noopener,noreferrer');
    showToast(`📖 Opening Wikipedia: ${countryName}`, 1500);
}

// ========== FILTER COUNTRIES ==========
function filterCountries() {
    let filtered = [...COUNTRIES_CAPITALS];
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(item => 
            item.country.toLowerCase().includes(term) || 
            item.capital.toLowerCase().includes(term)
        );
    }
    
    return filtered;
}

// ========== RENDER BUTTONS ==========
function renderButtons() {
    if (!container) return;
    
    const filtered = filterCountries();
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-message">✨ No matching countries found ✨</div>';
        if (totalCountSpan) totalCountSpan.innerText = '0';
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    filtered.forEach((item, idx) => {
        const { country, capital } = item;
        
        const btn = document.createElement('button');
        btn.className = 'capital-btn';
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
        linkIcon.textContent = '📖';
        
        rightWrapper.appendChild(capitalSpan);
        rightWrapper.appendChild(linkIcon);
        
        btn.appendChild(leftSpan);
        btn.appendChild(rightWrapper);
        
        // Click opens Wikipedia page
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openWikipedia(country);
        });
        
        fragment.appendChild(btn);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
    if (totalCountSpan) totalCountSpan.innerText = filtered.length;
}

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
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

// ========== VIEW TOGGLE ==========
function initViewToggle() {
    if (gridViewBtn && listViewBtn && container) {
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            container.classList.remove('list-view');
            currentView = 'grid';
        });
        
        listViewBtn.addEventListener('click', () => {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            container.classList.add('list-view');
            currentView = 'list';
        });
    }
}

// ========== DARK MODE ==========
function initDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️ Light';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkNow = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkNow);
            themeToggle.textContent = isDarkNow ? '☀️ Light' : '🌙 Dark';
            showToast(isDarkNow ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
        });
    }
}

// ========== INITIALIZE ==========
function init() {
    initSearch();
    initViewToggle();
    initDarkMode();
    renderButtons();
    
    console.log("🌍 World Capitals Dashboard Ready!");
    console.log(`📊 ${COUNTRIES_CAPITALS.length} countries loaded`);
    console.log("📖 Each button opens the country's Wikipedia page!");
    console.log("💡 Examples:");
    console.log("   - Bangladesh → https://en.wikipedia.org/wiki/Bangladesh");
    console.log("   - Argentina → https://en.wikipedia.org/wiki/Argentina");
}

// Start the app
init();
