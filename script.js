// Materials Data
const materials = [
    {
        name: "Cement",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTzxL1rYuXcd7MlKykdK4AGMHdLozSDV8Bg&s",
        description: "Premium quality cement for strong and durable construction"
    },
    {
        name: "Sand",
        img: "https://5.imimg.com/data5/SELLER/Default/2024/6/425289240/CS/LM/ZT/183426409/washed-sand-500x500.jpg",
        description: "Fine quality river sand for plastering and concrete work"
    },
    {
        name: "Aggregate",
        img: "https://5.imimg.com/data5/SELLER/Default/2024/7/438918639/JW/ZN/NG/213683241/6mm-crushed-stone-aggregate.jpg",
        description: "Crushed stone aggregates in various sizes for concrete"
    },
    {
        name: "Steel",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgH0bAP_IpgRv2GnvsjGaxYMNe2oxs1XMTA&s",
        description: "High-tensile strength steel rods and bars for reinforcement"
    },
    {
        name: "Opus Color",
        img: "https://www.deccanclap.com/uploads/pricelist/birla-opus-paints.jpg",
        description: "Premium quality paints and coatings for interior & exterior"
    },
    {
        name: "Bricks",
        img: "https://builders9.com/wp-content/uploads/2020/12/b9-vijayawada-bricks.jpg",
        description: "High-quality clay bricks and concrete blocks"
    },
    {
        name: "Plywood",
        img: "https://www.zadinteriors.com/blog/wp-content/uploads/2020/02/What-Is-MR-In-Plywood.jpg",
        description: "Various grades of plywood for construction and interior"
    },
    {
        name: "Waterproofing",
        img: "https://sunandaglobal.com/wp-content/uploads/2024/10/How-to-Choose-the-Right-Roof-Waterproofing-Services.webp",
        description: "Chemical solutions for waterproofing structures"
    }
];

// Equipment Data
const equipment = [
    {
        name: "Dumper",
        img: "https://vaishnu.com/wp-content/uploads/2020/09/cover.jpg",
        description: "Heavy-duty dumpers for material transportation"
    },
    {
        name: "JCB & Loader",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/7cce99182631077.Y3JvcCw5MjYsNzI1LDMyLDA.jpg",
        description: "Earth-moving equipment for excavation and loading"
    },
    {
        name: "Hitachi Excavator",
        img: "https://desimachines.com/wp-content/uploads/2024/12/desi-machines-tata-hitachi-excavator-zaxis-490h-ultra-featured.jpg",
        description: "Excavators for digging and heavy construction work"
    },
    {
        name: "Tractor & Trolley",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/9/346217588/QM/FG/TV/29626625/tractor-trolley-hook.jpg",
        description: "Agricultural tractors with trolleys for material transport"
    },
    {
        name: "Concrete Mixer",
        img: "https://4.imimg.com/data4/LE/CB/MY-11973060/transit-concrete-mixer.jpg",
        description: "Concrete mixing machines for on-site concrete preparation"
    },
    {
        name: "Vibrator Machine",
        img: "https://m.media-amazon.com/images/I/81PtZuYqJTL.jpg",
        description: "Concrete vibrators for compaction and air removal"
    },
    {
        name: "Crane",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sCTp7fdYDyYbc6GOdPWQ29wqMCXXq0wRyQ&s",
        description: "Tower and mobile cranes for lifting heavy materials"
    },
    {
        name: "Compactor",
        img: "https://www.sakaiamerica.com/wp-content/uploads/sakai-sv544df-84-inch-14-ton-single-drum-smooth-soil-compactor-with-padfoot-shell.webp",
        description: "Soil compactors for ground preparation and compaction"
    }
];

// DOM Elements
const materialsContainer = document.getElementById("materialsList");
const equipmentContainer = document.getElementById("equipmentList");
const slidesContainer = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");
const backToTopBtn = document.getElementById("backToTop");
const quoteForm = document.getElementById("quoteForm");
const statValues = document.querySelectorAll(".stat-value");
const navLinks = document.querySelectorAll(".nav-link");

// Initialize Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Initialize Materials
function initMaterials() {
    materialsContainer.innerHTML = "";
    
    materials.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <div class="card-description">${item.description}</div>
        `;
        materialsContainer.appendChild(card);
    });
}

// Initialize Equipment
function initEquipment() {
    equipmentContainer.innerHTML = "";
    
    equipment.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <div class="card-description">${item.description}</div>
        `;
        equipmentContainer.appendChild(card);
    });
}

// Slider Functions
function showSlide(index) {
    // Handle wrap-around
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    // Update slide position
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active indicator
    indicators.forEach((indicator, idx) => {
        if (idx === currentSlide) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Animate Stats Counter
function animateStats() {
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute("data-target"));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                stat.textContent = target;
            }
        };
        
        // Start counter when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

// Back to Top Functionality
function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
    } else {
        backToTopBtn.classList.remove("visible");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    mainNav.classList.toggle("active");
    
    // Change icon
    const icon = mobileMenuToggle.querySelector("i");
    if (mainNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}

// Handle Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you ${name}! Your quote request has been received. We will contact you at ${phone} within 24 hours.`);
    
    // Reset form
    quoteForm.reset();
}

// Update Active Nav Link on Scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// Initialize Everything
function init() {
    // Initialize materials and equipment
    initMaterials();
    initEquipment();
    
    // Set up slider
    showSlide(0);
    
    // Set up auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    const slider = document.querySelector(".hero-slider");
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Animate stats
    setTimeout(animateStats, 1000);
    
    // Event Listeners
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
    
    // Add click events to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => goToSlide(index));
    });
    
    // Mobile menu
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mainNav.classList.contains("active")) {
                toggleMobileMenu();
            }
        });
    });
    
    // Back to top
    window.addEventListener("scroll", handleBackToTop);
    backToTopBtn.addEventListener("click", scrollToTop);
    
    // Form submission
    quoteForm.addEventListener("submit", handleFormSubmit);
    
    // Update active nav link on scroll
    window.addEventListener("scroll", updateActiveNavLink);
    
    // Add CSS for card description
    const style = document.createElement("style");
    style.textContent = `
        .card-description {
            padding: 0 1.5rem 1.5rem;
            color: #666;
            font-size: 0.9rem;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);