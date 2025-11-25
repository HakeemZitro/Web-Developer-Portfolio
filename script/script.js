// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle")
const mobileNav = document.getElementById("mobileNav")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open")
  mobileNav.classList.toggle("open")
})

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll(".nav-link-mobile")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open")
    mobileNav.classList.remove("open")
  })
})

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Active section highlighting on scroll
const sections = ["home", "about", "work", "contact"]
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = sectionId
      }
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === current) {
      link.classList.add("active")
    }
  })
})

// Contact form submission
const contactForm = document.getElementById("contactForm")
const submitBtn = document.getElementById("submitBtn")
const toast = document.getElementById("toast")

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  // Disable submit button
  submitBtn.disabled = true
  submitBtn.innerHTML = `
        <svg class="icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Enviando...
    `

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Show success toast
  showToast("Mensaje Enviado! Gracias por contactarme, enseguida me pondre en contacto contigo.")

  // Reset form
  contactForm.reset()

  // Re-enable submit button
  submitBtn.disabled = false
  submitBtn.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        Envía tu Mensaje
    `
})

// Toast notification function
function showToast(message, isError = false) {
  toast.textContent = message
  if (isError) {
    toast.classList.add("error")
  } else {
    toast.classList.remove("error")
  }
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
    toast.textContent = ""
  }, 4000)
}

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Add CSS for spinning animation
const style = document.createElement("style")
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .animate-spin {
        animation: spin 1s linear infinite;
    }
`
document.head.appendChild(style)
