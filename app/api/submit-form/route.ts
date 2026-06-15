import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { parentName, email, teenagerName } = body

    // Validate required fields
    if (!parentName || !email || !teenagerName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save the form data to a database
    // 2. Send an email to the parent
    // 3. Send a notification to the admin
    // 4. Trigger a Calendly integration for booking a call

    // For now, just log and return success
    console.log('Form submitted:', { parentName, email, teenagerName })

    // In production, you would:
    // - Connect to your email service (SendGrid, Resend, etc.)
    // - Send the PDF via email
    // - Create a Calendly invitation
    // - Store the lead in your database or CRM

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. Check your email for the brief.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
