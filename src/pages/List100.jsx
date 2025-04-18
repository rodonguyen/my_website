import { changeWindowTitle, Hyperlink } from '../utils/utils'
import { LeetcodeSvg } from '../assets/icons'

const List100 = () => {
	changeWindowTitle(window.location.pathname)
	const readBookNum = 22

	return (
		<div className="container mt-8 text-left">
			<h1 className="text-2xl">List 100</h1>
			<p className="mb-4">
				We all have 1 life. Why not making the most of it and do exciting things? They keep me
				waking up everyday with a spirit on fire and I plan to do them before I die. Inspired by
				Chip Huyen's.
			</p>
			<ol>
				{/* Legacy */}
				<li>✗ Read 100 books ({readBookNum}/100)</li>
				<li>✗ Read 1000 books ({readBookNum}/1000)</li>
				<li>✓ Teach a course in university (CAB403, CAB230, IFB102 at QUT)</li>
				<li>✗ Found a tech company in Vietnam and it survives :)</li>
				<li>✗ Give a talk to {'>'}100 audiences (like... any talk)</li>
				<li>✗ Establish a Mentorship Program/AlumNetwork in my high school</li>
				<li>✗ Found an organic modern farm (my father's dream)</li>
				{/* Career */}
				<li>✓ Annual income before tax AU$65,000</li>
				<li>✗ Get a PhD (I would be the 1st Dr in my family)</li>
				<li>✗ Get Aussie PR</li>
				{/* Travelling */}
				<li>✗ See Auroras</li>
				<li>✗ Conquer Fansipan Mountain</li>
				<li>✗ Vipassana Meditation Retreat</li>
				<li>✗ Pay and have a 14-day holiday with my family</li>
				<li>✗ Visit Norway's mountains</li>
				<li>
					✓ Visit New Zealand's mountains (I've seen them but next time I want to get closer and do
					some hiking)
				</li>
				<li>✗ Travel to 10 countries (2/10)</li>
				<li>✗ Travel to 20 Vietnamese cities (5/20)</li>{' '}
				{/* HCM, Danang, Hue, Phu Quoc, Kon Tum,  */}
				<li>✗ Have a vacation on an island/a yatch</li>
				<li>✗ Check-in at Great Pyramid of Giza, Egypt</li>
				<li>✗ Travel to Africa</li>
				<li>✗ Sky dive (without an instructor)</li>
				<li>✗ Camp and enjoy the Milky Way Galaxy</li>
				<li>✗ Hike to Everest base camp + see the Hymalayas</li>
				<li>✗ Participate in a chess boxing match</li>
				<li>✗ Cuddle lions</li>
				<li>✗ Ride horse</li>
				<li>✗ Buy a house for my parents to retire in Australia</li>
				<li>✗ Get married on an island and honeymoon around the world</li>
				<li>✗ Get a driver license</li>
				<li>✗ Learn to fly helicopter/plane</li>
				<li>✗ Achieve Financial Freedom</li>
				<li>✗ Work in a giant financial insitution</li>
				<li>✗ Learn to play a musical instrument (guitar)</li>
				<li>✗ Ask a stranger out successfully</li>
				<li>✗ Finish a full marathon</li>
				<li>✗ Be 70kg and muscular</li>
				<li>✗ Master Vim</li>
				<li>
					✗ Connect with 10 start-up founders (GPIB, RSP, Electrafi, AerVision, Concensus Layer,
					Labrys)
				</li>
				<li>✗ Walk on the moon</li>
				<li>✗ Swim in outer space</li>
				<li>✗ Swim with whales/dolphins</li>
				<li>~ Live a great life</li>
				{/* <li>✗ Date a model</li> */}
				{/* <li>✓ </li> */}
				{/* <li>✗ Bring a girl home from club</li> */}
			</ol>

			<h1 className="text-xl mt-6">My Wish List</h1>
			<p>
				This helps mitigate the headache of my close friends as my birthday approaches.{' '}
				{'Love, Rodo <3'}
			</p>
			<ul className="list-disc list-inside">
				<li>Great time with friends and family</li>
				<li>Tissot Le Locle Powermatic 80 Open Heart</li>
				<li>Amazon Giftcard for books</li>
				<li>Some Sats / Eth</li>
			</ul>

			<h1 className="text-xl mt-6">Hobbies</h1>
			<ul className="list-disc list-inside">
				<li>
					Hiking, Gym/Calisthenics, Bowling,{' '}
					<Hyperlink href="https://www.chess.com/member/rodobolo">Chess</Hyperlink>
					♟️ (ELO 1000, rapid), Badminton, Reading, Movies
				</li>
				<li>Things I'm proud to know a bit: Tennis, Golf, Bouldering</li>
				<li>Want to try: Camping</li>
				<li>
					<Hyperlink href="https://leetcode.com/rodonguyen/">Leetcode</Hyperlink> <LeetcodeSvg />{' '}
					top 1 million (and dropping)
				</li>
			</ul>
		</div>
	)
}

export default List100
