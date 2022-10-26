import "bootstrap/dist/css/bootstrap.min.css";

const List100 = () => {
  const readBookNum = 16;

  return (
  <>
    <section>
      <h1 className="text-align-left xlarge">List 100</h1>
      <p>We all have 1 life. Why not making the most of it and do exciting things? These are the things that keep me excited every morning and that I plan to do before I die. Inspired by Chip Huyen's.</p>
      <p>Progress: 0/100</p>
      <ol className="text-align-left">
        <li>✗ Read 100 books ({readBookNum}/100)</li>
        <li>✗ Net worth AU$1,000,000</li>
        <li>✗ See Auroras</li>
        <li>✗ Conquer Fansipan Mountain</li>
        <li>✗ 10-day Vipassana Meditation Retreat</li>
        <li>✗ Meditate 30 minutes/day</li>
        <li>✗ Teach a course in university</li>
        <li>✗ Pay and have a 14-day holiday with my family</li>
        <li>✗ Walk on the moon</li>
        <li>✗ Swimming in Exosphere</li>
        <li>✗ Found a tech company in Vietnam and it survives :)</li>
        <li>✗ Give a talk to &gt;100 audiences (like... any talk)</li>
        <li>✗ Visit Norway's mountains</li>
        <li>✗ Travel to 10 countries (1/10)</li>
        <li>✗ Get a PhD</li>
        <li>✗ Be an Australian Permanent Resident</li>
        <li>✗ Give my parents a house to retire in Australia</li>
        <li>✗ Learn to drive</li>
        <li>✗ Learn to fly a helicopter/plane</li>
        <li>✗ Be Financial Independent</li>
        <li>✗ Date a model</li>
        <li>✗ Read 1000 books ({readBookNum}/100)</li>
        <li>✗ Vacation on an island/a yatch</li>
        <li>✗ Work in a big financial insitution</li>
        <li>✗ Climb Great Pyramid of Giza, Egypt</li>
        <li>✗ Sky dive (without an instructor)</li>
        <li>✗ Camp and enjoy the Milky Way Galaxy</li>
        <li>✗ Hike to Everest base camp</li>
        <li>✗ Learn to play a musical instrument (guitar)</li>
        <li>✗ Ask a stranger out successfully</li>
        <li>✗ Finish a full marathon</li>
        <li>✗ Be 70kg and muscular</li>
        <li>✗ </li>
        <li>✗ </li>
        <li>✗ </li>
        <li>✗ </li>
        <li>✓ </li>
        {/* <li>✗ Bring a girl home from club</li> */}
        {/* <li>✗ Have sex with 10 people (at different time)</li> */}
        {/* <li>✓ </li> */}
      </ol>
    </section>
  </>
  );
};

export default List100;
