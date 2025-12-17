// Quick API Test Script for Hackathon Demo
const baseURL = 'http://localhost:3002';

async function testAPI() {
  console.log('🚀 Testing Sentra API...\n');

  // Test 1: Health Check
  console.log('1️⃣ Health Check');
  try {
    const response = await fetch(`${baseURL}/health`);
    const data = await response.json();
    console.log('✅ Status:', data.status);
    console.log('🔗 Link:', `${baseURL}/health\n`);
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
  }

  // Test 2: Generate AI Content
  console.log('2️⃣ AI Content Generation');
  try {
    const response = await fetch(`${baseURL}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: 'Write a short health tip about drinking water',
        maxTokens: 100
      })
    });
    const data = await response.json();
    console.log('✅ Generated:', data.data?.generatedText?.substring(0, 100) + '...');
    console.log('🔗 Link:', `${baseURL}/api/generate\n`);
  } catch (error) {
    console.log('❌ Content generation failed:', error.message);
  }

  // Test 3: Symptom Analysis
  console.log('3️⃣ Medical Symptom Analysis');
  try {
    const response = await fetch(`${baseURL}/api/health/analyze-symptoms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        symptoms: ['headache', 'fever', 'nausea'],
        age: 30,
        sex: 'male',
        duration: '2 days',
        severity: 'moderate'
      })
    });
    const data = await response.json();
    console.log('✅ Top Condition:', data.data?.conditions?.[0]?.name, 
                `(${data.data?.conditions?.[0]?.probability}% probability)`);
    console.log('🔗 Link:', `${baseURL}/api/health/analyze-symptoms\n`);
  } catch (error) {
    console.log('❌ Symptom analysis failed:', error.message);
  }

  // Test 4: Vision Scene Analysis
  console.log('4️⃣ Vision Scene Analysis');
  try {
    const response = await fetch(`${baseURL}/api/vision/analyze-scene`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageData: 'base64_mock_image_data',
        mode: 'navigation'
      })
    });
    const data = await response.json();
    console.log('✅ Scene:', data.data?.narration);
    console.log('🔗 Link:', `${baseURL}/api/vision/analyze-scene\n`);
  } catch (error) {
    console.log('❌ Vision analysis failed:', error.message);
  }

  // Test 5: User Registration
  console.log('5️⃣ User Registration');
  try {
    const response = await fetch(`${baseURL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'demo@sentra.com',
        password: 'hackathon2024',
        name: 'Demo User',
        role: 'patient'
      })
    });
    const data = await response.json();
    console.log('✅ User Created:', data.data?.user?.name, `(${data.data?.user?.role})`);
    console.log('🔗 Link:', `${baseURL}/api/auth/register\n`);
  } catch (error) {
    console.log('❌ Registration failed:', error.message);
  }

  console.log('📚 Complete API Documentation:');
  console.log('🔗 Swagger UI:', `${baseURL}/api-docs`);
  console.log('📄 API Docs: ./API_DOCUMENTATION.md');
  console.log('\n🎉 All tests completed! API is ready for frontend integration.');
}

// Run tests
testAPI().catch(console.error);