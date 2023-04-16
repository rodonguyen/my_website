import createHyperlink from "../components/utils";

const List100 = () => {
  const readBookNum = 16;

  return (
    <div className="container">
      <h1 className="text-align-left xlarge">List 100</h1>
      <p>We all have 1 life. Why not making the most of it and do exciting things? These are the things that keep me excitedly waking up every morning and that I plan to do before I die. Inspired by Chip Huyen's.</p>
      <ol className="text-align-left">
        <li>✗ Read 100 books ({readBookNum}/100)</li>
        <li>✗ Net worth AU$1,000,000</li>
        <li>✗ See Auroras</li>
        <li>✗ Conquer Fansipan Mountain</li>
        <li>✗ 10-day Vipassana Meditation Retreat</li>
        <li>✓ Teach a course in university</li>
        <li>✗ Pay and have a 14-day holiday with my family</li>
        <li>✗ Walk on the moon</li>
        <li>✗ Swim in Exosphere in a space suit</li>
        <li>✗ Found a tech company in Vietnam and it survives :)</li>
        <li>✗ Give a talk to {'>'}100 audiences (like... any talk)</li>
        <li>✗ Visit Norway's mountains</li>
        <li>✗ Travel to 10 countries (1/10)</li>
        <li>✗ Travel to 20 Vietnamese cities (3/20)</li>   {/* HCM, Danang, Hue */}
        <li>✗ Get a PhD (I would be the 1st Dr in my family)</li>
        <li>✗ Get Aussie PR</li>
        <li>✗ Buy a house for my parents to retire in Australia</li>
        <li>✗ Get a driver license</li>
        <li>✗ Learn to fly helicopter/plane</li>
        <li>✗ Be Financial Independent</li>
        <li>✗ Read 1000 books ({readBookNum}/1000)</li>
        <li>✗ Have a vacation on an island/a yatch</li>
        <li>✗ Work in a big financial insitution</li>
        <li>✗ Climb Great Pyramid of Giza, Egypt</li>
        <li>✗ Sky dive (without an instructor)</li>
        <li>✗ Camp and enjoy the Milky Way Galaxy</li>
        <li>✗ Hike to Everest base camp + see the Hymalayas</li>
        <li>✗ Learn to play a musical instrument (guitar)</li>
        <li>✗ Ask a stranger out successfully</li>
        <li>✗ Finish a full marathon</li>
        <li>✗ Be 70kg and muscular</li>
        <li>✗ Cuddle lions</li>
        <li>✗ Master NeoVim</li>
        <li>✗ Date a model</li>
        <li>✗ Swim with whales/dolphins</li>
        {/* <li>✗ </li> */}
        <li>✗ Travel to Africa</li>
        <li>✗ Connect with 10 start-up founders</li>
        <li>✗ Establish a Mentorship Program in my high school</li>
        <li>✗ Found an organic modern farm (my father's dream)</li>
        <li>~ Live a great life</li>
        {/* <li>✓ </li> */}
        {/* <li>✗ Bring a girl home from club</li> */}
        {/* <li>✗ Bodycount = 10</li> */}
      </ol>

      <h1 className="text-align-left xlarge">My Wish List</h1>
      <p> This helps mitigate the headache of my close friends as my birthday comes. Love, Rodo{' <3'}</p>
      <ul className="text-align-left">
        <li>UNIQLO or any giftcard</li>
        <li>UltraBoost shoes (in a color that's suitable for both casual and formal, size 10.5)</li>
        <li>Clothes: {createHyperlink('https://au.shop.gymshark.com/collections/tanks/mens', 'tank top for gym')}, etc. </li>
        <li>Nothing else for now, I'm quite a minimalist :)</li>
      </ul>
    </div>
  );
};

export default List100;
