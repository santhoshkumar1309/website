export function smoothScrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    const headerOffset = 100 // Adjust based on your header height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

export function setupHashChangeListener() {
  const handleHashChange = () => {
    const hash = window.location.hash
    if (hash) {
      const elementId = hash.substring(1) // Remove the # character
      smoothScrollToElement(elementId)
    }
  }

  // Run on initial load if there's a hash
  if (window.location.hash) {
    // Add a small delay to ensure the page has fully loaded
    setTimeout(handleHashChange, 100)
  }

  // Add event listener for hash changes
  window.addEventListener("hashchange", handleHashChange)

  // Return cleanup function
  return () => {
    window.removeEventListener("hashchange", handleHashChange)
  }
}

