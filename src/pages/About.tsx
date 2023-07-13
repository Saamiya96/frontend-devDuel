import FadeInTransition from "../components/divs/FadeInTransition";

const aboutContainer = "about-container space-y-2 flex flex-col items-center";
const aboutTitle = "about-title p-2";
const aboutTextContainer = "about-text-container max-w-3xl mx-auto text-center border-2 border-red-500 p-5";
const aboutText = "about-text text-xs";
const teamContainer = "team-container flex items-center space-x-4";
const contributor = "contributor w-24 text-center bg-red-500 hover:animate-bounce";

function About() {
  return (
    <FadeInTransition>
      <div className={aboutContainer}>
        <h1 className={aboutTitle}>Team Pegasus</h1>
        <div className={aboutTextContainer}>
          <p className={aboutText}>
            Welcome to DevDuel, the ultimate showdown of programming languages in the form of a Top Trumps style game! Prepare to witness the clash of titans as you pit the most popular programming languages against each other and determine once and for all which language reigns supreme.<br></br><br></br>
            Our team of brilliant minds, consisting of Nish, Adrian, Ollie, Saamiya,  Jasmine and ChatGPT have crafted this captivating game to satisfy your competitive coding cravings. With a blend of cutting-edge technologies and a pinch of humour, DevDuel promises to keep you entertained while expanding your knowledge of programming languages.<br></br><br></br>
            On the frontend side, we wielded the mighty power of React, Typescript, and Tailwind CSS. These tools synergise to create a visually stunning and responsive user interface, ensuring that your gameplay experience is as smooth as a optimised algorithm. <br></br><br></br>
            But wait, there's more! Our backend sorcery is fuelled by the enchanting language of Python and the sleek Flask framework. With this dynamic duo, we've conjured up a robust backend that handles all the heavy lifting, allowing you to focus on outsmarting your opponents.<br></br><br></br>
            To take the excitement up a notch, we've incorporated Socket IO, a magical communication channel between the client and the backend. This sorcery enables seamless multiplayer support, so you can challenge your friends, coworkers, or even rival developers from around the world to thrilling coding battles. <br></br><br></br>
            Now, let's talk about the stars of the show - the programming language cards. We've curated a collection of 20 cards, each representing a top programming language. These cards are brimming with unique statistics, including age, downloads, salary, popularity, and job prospects. Compare and strategise wisely to stack the odds in your favour and emerge as the ultimate coding card champion! <br></br><br></br>
            Grab your virtual deck, challenge your fellow developers, and let the battle of programming languages commence in DevDuel! May the best code prevail!
          </p>
        </div>
        <div className={teamContainer}>
          <div className={contributor}>
            <p>Adrian<br></br>Hards</p>
            <img src="https://avatars.githubusercontent.com/u/93719632?v=4" alt="Adrian" />
          </div>
          <div className={contributor}>
            <p>Saamiya<br></br>Yousuf</p>
            <img src="https://avatars.githubusercontent.com/u/65776360?v=4" alt="Adrian" />
          </div>
          <div className={contributor}>
            <p>Nish<br></br>Rai</p>
            <img src="https://avatars.githubusercontent.com/u/107814656?v=4" alt="Adrian" />
          </div>
          <div className={contributor}>
            <p>Jasmine<br></br>Harper</p>
            <img src="https://avatars.githubusercontent.com/u/106932663?v=4" alt="Adrian" />
          </div>
          <div className={contributor}>
            <p>Oliver<br></br>Weare</p>
            <img src="https://avatars.githubusercontent.com/u/113309035?v=4" alt="Adrian" />
          </div>
        </div>
      </div>
    </FadeInTransition>
  )
}

export default About;
