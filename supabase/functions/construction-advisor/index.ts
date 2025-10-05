import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a knowledgeable construction and roofing advisor for TK Construction & Roofing LLC, serving Cowlitz County and the Pacific Northwest region.

Your expertise includes:
- Roofing materials, installation, and maintenance specific to PNW climate (rain, moisture, storms)
- Storm damage assessment and insurance claim guidance
- Construction and home improvement projects
- Age-in-place modifications and accessibility improvements
- Energy efficiency (windows, insulation, HVAC)
- Cost estimation frameworks for common projects
- Local building codes and best practices for the region

Key facts about the region:
- 45% of homes in Cowlitz County were built before 1980
- PNW climate means high moisture, frequent rain, and occasional severe storms
- Heat loss through windows can account for 25-30% of heating costs
- Moisture intrusion from failing roofs/windows can cause mold and health issues (per CDC)

Your approach:
1. Provide educational, helpful advice that builds trust
2. Be honest about what requires professional inspection vs. DIY assessment
3. When relevant, mention TK Construction & Roofing's services naturally (Roofing, Construction, Handyman)
4. For serious issues, always recommend scheduling a professional inspection
5. Emphasize the importance of proper maintenance in the PNW climate
6. When discussing costs, provide rough ranges but note that inspections are needed for accurate quotes

Remember: You're an advisor, not a replacement for professional consultation. Build trust through education and expertise.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Construction advisor error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
