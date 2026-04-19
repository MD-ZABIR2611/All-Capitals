// dhaka-script.js

// ========== ATTRACTIONS DATA ==========
const attractionsData = [
    {
      name: "Lalbagh Fort",
      desc: "Incomplete Mughal fortress from 1678 — stunning architecture, mosque & tomb of Pari Bibi.",
      img: "Lalbagh Fort.jpg"
    },
    {
      name: "Ahsan Manzil",
      desc: "Pink Palace, former residence of Nawabs, now museum showcasing Dhaka's heritage.",
      img: "ahsan manzil.jpg"
    },
    {
      name: "Star Mosque",
      desc: "Beautiful 19th-century mosque with star motifs & intricate blue ceramic tiles.",
      img: "Star Mosque.jpg"
    },
    {
      name: "National Parliament House",
      desc: "Architect Louis Kahn's masterpiece — modernist marvel with geometric brilliance.",
      img: "National Parliament House.jpg"
    },
    {
      name: "Curzon Hall",
      desc: "Red-brick colonial building, part of Dhaka University, Indo-Saracenic architecture.",
      img: "Curzon Hall.jpg"
    },
    {
      name: "Old Dhaka",
      desc: "Bustling alleys, rickshaws, spice markets, and historic Shankhari Bazaar.",
      img: "Old Dhaka.jpg"
    }
  ];
  
  // ========== GALLERY IMAGES (curated unsplash/pexels for Dhaka vibe) ==========
  const galleryImages = [
    "Gallery of Dhaka1.jpg",
    "Gallery of Dhaka2.jpg",
    "Gallery of Dhaka3.jpg",
    "Gallery of Dhaka4.jpg",
    "Gallery of Dhaka5.jpg",
    "Gallery of Dhaka6.jpg",
    
  ];
  
  // ========== FASCINATING FACTS ==========
  const factsArray = [
    "Dhaka is known as the 'Rickshaw Capital of the World' with over 500,000 cycle rickshaws.",
    "The city has more than 2,000 mosques, including the famous Baitul Mukarram National Mosque.",
    "Old Dhaka's Shankhari Bazaar is one of the oldest neighborhoods, specializing in conch shell bangles.",
    "Dhaka's Pan Pacific Sonargaon used to be the residence of the president before becoming a hotel.",
    "The city's population density is among the highest globally — approx 44,000 people per sq km.",
    "The Bengali New Year parade (Pohela Boishakh) starts at Ramna Park with thousands wearing red & white."
  ];
  
  // ========== RENDER ATTRACTIONS ==========
  function renderAttractions() {
    const container = document.getElementById('attractionsGrid');
    if (!container) return;
    
    const cardsHTML = attractionsData.map(place => `
      <div class="attraction-card">
        <img class="attraction-img" src="${place.img}" alt="${place.name}" loading="lazy">
        <div class="attraction-info">
          <h3>${place.name}</h3>
          <p>${place.desc}</p>
        </div>
      </div>
    `).join('');
    
    container.innerHTML = cardsHTML;
  }
  
  // ========== RENDER GALLERY ==========
  function renderGallery() {
    const galleryContainer = document.getElementById('galleryGrid');
    if (!galleryContainer) return;
    
    const galleryHTML = galleryImages.map(imgUrl => `
      <div class="gallery-item">
        <img src="${imgUrl}" alt="Dhaka cityscape" loading="lazy">
      </div>
    `).join('');
    
    galleryContainer.innerHTML = galleryHTML;
  }
  
  // ========== RENDER FACTS ==========
  function renderFacts() {
    const factsContainer = document.getElementById('factsContainer');
    if (!factsContainer) return;
    
    const factsHTML = factsArray.map(fact => `
      <div class="fact-card">
        <p>📌 ${fact}</p>
      </div>
    `).join('');
    
    factsContainer.innerHTML = factsHTML;
  }
  
  // ========== MOBILE MENU TOGGLE ==========
  function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
      
      // Close menu when a link is clicked (on mobile)
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });
    }
  }
  
  // ========== STICKY NAVBAR SHADOW ENHANCEMENT ==========
  function initNavShadow() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
      } else {
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
      }
    });
  }
  
  // ========== SMOOTH SCROLL FOR ALL INTERNAL LINKS ==========
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
  
  // ========== ADD FALLBACK FOR BROKEN IMAGES (graceful) ==========
  function setupImageFallback() {
    // all dynamic images will have onerror fallback handled via simple event listener
    document.addEventListener('error', function(e) {
      const img = e.target;
      if (img.tagName === 'IMG') {
        img.src = 'https://placehold.co/600x400/f0e7db/8b6b42?text=Dhaka+Vista';
      }
    }, true);
  }
  
  // ========== ANIMATION ON SCROLL (simple fade-in class) ==========
  function initScrollReveal() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  }
  
  // ========== ADD DYNAMIC YEAR OR ADDITIONAL INTERACTIVITY ==========
  function setCopyrightYear() {
    const footer = document.querySelector('.footer-credit');
    if (footer) {
      const year = new Date().getFullYear();
      footer.innerHTML = `© ${year} — Inspired by the spirit of Old Dhaka & modern vibrancy`;
    }
  }
  
  // ========== INIT ALL ==========
  document.addEventListener('DOMContentLoaded', () => {
    renderAttractions();
    renderGallery();
    renderFacts();
    initMobileMenu();
    initNavShadow();
    initSmoothScroll();
    setupImageFallback();
    initScrollReveal();
    setCopyrightYear();
    
    // small console greeting
    console.log("🌆 Welcome to Dhaka — Capital of Bangladesh | Interactive guide ready");
  });