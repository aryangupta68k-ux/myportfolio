import Link from "next/link";

export const metadata = {
  title: "block",
  description: "interaction designer",
};

export default function BlockProject() {
  return (
    <div className="block-page relative w-full flex flex-col sm:flex-row bg-[#eeeeee] -mt-4 sm:-mt-8 px-4 pt-8 sm:px-8 sm:pt-8 text-black min-h-screen">
      <div className="w-full items-left px-2 sm:pl-64 sm:pr-8 flex flex-col gap-8 pb-24">
        <div className="sm:hidden w-full flex flex-row justify-between">
          <Link href="/" className="no-underline">
            ← back
          </Link>
          <Link href="/project/knob" className="no-underline">
            next: knob →
          </Link>
        </div>
        
        <div>
          <h1 id="block">Block</h1>
          <p className="text-gray-500">CIID Thesis Project, 2025</p>
        </div>

        <div className="w-full sm:w-[480px] flex flex-col gap-1">
          <p>
            Mentors:{" "}
            <a
              className="underline text-black"
              href="https://www.linkedin.com/in/downschris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Downs
            </a>
            ,{" "}
            <a
              className="underline text-black"
              href="https://www.linkedin.com/in/chavarria-jose/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jose Chavarría
            </a>
            ,{" "}
            <a
              className="underline text-black"
              href="https://www.linkedin.com/in/raphael-katz-1750a69a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Raphael Katz
            </a>
          </p>
          <p>Project duration: 8 weeks</p>
        </div>

        <div className="w-full sm:w-[480px] flex flex-col gap-4">
          <p>
            Art is a deeply human act rooted in intuition, creativity and lived experience. 
            I've been exploring how we might use AI to create art that remains original and 
            true to ourselves. Today's AI interfaces are text-based and feel like a blackbox, 
            where my own essence gets lost in the process. Technology has always transformed 
            art (paint tubes enabling landscapes, cameras sparking abstraction); 
            <span className="bg-yellow-200 px-1">how will art-making change with AI?</span>
          </p>
          
          <p>
            My thesis is a series of explorations following Louis Kahn's{" "}
            <a
              className="underline text-black"
              href="/writing/kahn-brick"
              target="_blank"
              rel="noopener noreferrer"
            >
              famous question
            </a>
            : what does <span className="line-through">the brick</span> AI want to be? 
            A question about respecting materials and building structures which help them 
            shine through. Through a dozen prototypes, I explored AI's material nature — 
            as an interface, as a non-human intelligence, it is water-like elasticity; 
            how it transforms as I give it different senses & abilities.{" "}
            <span className="bg-yellow-200 px-1">What's the best way to collaborate with AI?</span>
          </p>
          
          <p>
            Noticing a pattern in my explorations led to Block, an AI collaborator for 
            fine-artists. It has two senses (vision, hearing) & two abilities (speech, projection) 
            — the most natural mediums to collaborate. The artist stays central to the process, 
            while AI's meaninglessness expands their box of thinking.
          </p>
        </div>

        <div className="w-full max-w-[960px] aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
          <p className="text-gray-500">Video placeholder - Block demonstration</p>
        </div>

        <div className="w-full sm:w-[480px] flex flex-col gap-4">
          <h2>Research</h2>
          <p>
            I got to talk to some brilliant artists, and experimented in parallel to test 
            what I was hearing. I focused on three things: their creative process, 
            collaboration and working with AI.
          </p>
          
          <p>
            AI isn't a popular teammate. I heard about how it lacked empathy, warmth, 
            the sensitivity of a person. That's expected. But, Arnab and Emidio showed me 
            the flip side — how AI's alternative understanding of the world can help expand 
            one's box of thinking.{" "}
            <span className="bg-yellow-200 px-1">Hallucinations as AI creativity.</span>
          </p>
        </div>

        <div className="w-full flex justify-start py-2 sm:py-4">
          <Link
            href="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
