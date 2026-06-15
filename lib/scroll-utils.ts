/**
 * Utility functions for smooth scrolling and form navigation
 */

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/pbl-lab-brief.pdf'
  link.download = 'PBL-Lab-Founding-Cohort-Brief.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const scrollToForm = () => {
  scrollToElement('founding-cohort-form')
}
