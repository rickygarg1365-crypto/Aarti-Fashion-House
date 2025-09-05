import { NextRequest, NextResponse } from 'next/server';
import contactData from '@/data/contact.json';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: contactData
    });
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contact information' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }
    
    // Email validation if provided
    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Phone validation (basic)
    if (!/^\+?[\d\s\-\(\)]+$/.test(body.phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      );
    }
    
    // This would typically save to a database or send an email
    // For now, we'll just return success
    const contactSubmission = {
      ...body,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon!',
      data: contactSubmission
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
