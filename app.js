const questions = [
  {s:'209.01',q:'Which practice is safest before operating a pneumatic system?',a:['Wear eye protection, secure loose clothing, and inspect the system','Hold a leak close to your hand to locate it','Disconnect guards to improve visibility','Use compressed air to clean clothing'],c:0,e:'Pneumatic systems can inject debris and move unexpectedly. PPE, safe dress, inspection, and guarding reduce risk.'},
  {s:'209.01',q:'Which is a common pneumatic system hazard?',a:['Stored pressure that can release unexpectedly','A lack of electrical resistance in a wire','Water freezing inside an unplugged lamp','A low battery in a radio'],c:0,e:'Stored energy, unexpected actuator movement, hose whip, noise, and flying particles are common hazards.'},
  {s:'209.01',q:'Pneumatics is the use of what to transmit and control power?',a:['Compressed gas, usually air','Pressurized water only','Mechanical springs only','Electrical current through conductors'],c:0,e:'Pneumatic systems use compressed air or another gas for power and control.'},
  {s:'209.02',q:'What should you do before connecting a quick-connect air hose?',a:['Verify the supply is shut off and the fitting is clean','Open the branch valve fully','Remove the regulator','Increase pressure above the rated value'],c:0,e:'Shut off and isolate the supply, then inspect and clean fittings before connection.'},
  {s:'209.02',q:'What does a pressure regulator do?',a:['Reduces and maintains downstream pressure at an adjusted value','Measures temperature only','Stores compressed air','Lubricates the air line'],c:0,e:'A regulator controls downstream pressure despite reasonable changes in inlet pressure or flow.'},
  {s:'209.02',q:'Which unit is a US customary unit commonly used for gage pressure?',a:['psi','bar only','liters per minute','degrees Celsius'],c:0,e:'Pressure is commonly expressed in psi in US customary practice; SI units include Pa, kPa, and bar is widely used.'},
  {s:'209.03',q:'What is a normal first step when starting a reciprocating air compressor?',a:['Inspect the compressor and verify oil, guards, valves, and settings','Immediately drain all oil','Block the cooling airflow','Set the pressure switch above the rated limit'],c:0,e:'A pre-start inspection helps identify unsafe conditions and verifies the machine is ready.'},
  {s:'209.03',q:'A reciprocating compressor generates compressed air by:',a:['Using a piston to draw in, compress, and discharge air','Heating air in an open container','Spinning a pressure gauge','Passing air through a filter only'],c:0,e:'The piston changes cylinder volume: air is drawn in on one stroke and compressed/discharged on the other.'},
  {s:'209.03',q:'What is the purpose of draining an air compressor receiver?',a:['Remove accumulated moisture and contaminants','Increase the receiver temperature','Disable the pressure switch','Lower the oil viscosity'],c:0,e:'Condensation and contaminants collect in the receiver and should be drained using safe procedures.'},
  {s:'209.04',q:'In a pneumatic schematic, lines generally represent:',a:['Conductors or paths for fluid flow','Electrical voltage values','Component prices','The physical scale of the machine'],c:0,e:'Schematic lines show pneumatic connections and flow paths; drawings are functional, not physical layouts.'},
  {s:'209.04',q:'A 3/2 directional control valve has:',a:['Three ports and two positions','Two ports and three positions','Three cylinders and two gauges','Five ports and two positions'],c:0,e:'The notation commonly identifies ports first and positions second: 3 ports, 2 positions.'},
  {s:'209.04',q:'Which actuator uses air pressure to produce linear motion?',a:['Pneumatic cylinder','Pneumatic motor','Pressure gauge','Rotameter'],c:0,e:'Cylinders convert compressed-air energy into linear force and motion; motors produce rotary motion.'},
  {s:'209.05',q:'What is the purpose of a manual override on a pneumatic valve?',a:['To shift the valve by hand for testing or operation','To measure air temperature','To filter moisture','To increase hose diameter'],c:0,e:'Manual overrides let a technician actuate the valve without its normal pilot or control signal.'},
  {s:'209.05',q:'A push-lok fitting is designed to:',a:['Grip and seal hose pushed over its barb without a separate threaded connection','Measure pressure electronically','Replace a cylinder piston','Remove moisture from air'],c:0,e:'Push-lok fittings use a compatible hose pushed over a barb to create the connection.'},
  {s:'209.05',q:'Before installing a subplate-mounted valve, you should:',a:['Confirm the valve and subplate ports match the schematic and are clean','Apply thread sealant to every exhaust port','Remove all actuator flow controls','Connect it while the line is pressurized'],c:0,e:'Correct port matching, cleanliness, orientation, and depressurization are essential.'},
  {s:'209.06',q:'In a meter-out circuit, flow control restricts air:',a:['Leaving the actuator','Entering the actuator only','At the compressor intake','Inside the pressure gauge'],c:0,e:'Meter-out controls exhaust flow from the actuator and often provides smoother pneumatic motion.'},
  {s:'209.06',q:'A needle valve controls flow primarily by:',a:['Changing the size of a variable restriction with a tapered needle','Changing the air temperature','Adding oil to the receiver','Reversing cylinder ports automatically'],c:0,e:'The tapered needle moves toward or away from a seat to vary the passage area.'},
  {s:'209.06',q:'Which factor can affect pneumatic actuator speed?',a:['Air pressure, load, flow restriction, and hose/conductor size','Paint color only','The gauge face size only','The number of labels on the machine'],c:0,e:'Available pressure, load, valve and hose restrictions, and air consumption all influence speed.'},
  {s:'209.07',q:'The symbol ΔP represents:',a:['The difference in pressure between two points','Absolute temperature','Cylinder diameter','Air volume at rest'],c:0,e:'Delta P is pressure differential, calculated as the pressure at one point compared with another.'},
  {s:'209.07',q:'Ignoring friction, the net force from a cylinder is calculated as:',a:['Pressure × effective piston area','Pressure ÷ hose length','Flow × temperature','Area ÷ pressure'],c:0,e:'For a basic cylinder, F = P × A. On the rod side, effective area is reduced by rod area.'},
  {s:'209.07',q:'Pascal’s law states that pressure applied to a confined fluid is:',a:['Transmitted undiminished in all directions','Destroyed at the reservoir','Converted directly to temperature','Transmitted only downward'],c:0,e:'Pascal’s law explains how pressure is transmitted through a confined fluid and supports fluid-power force multiplication.'},
  {s:'209.08',q:'A rotameter indicates flow by:',a:['The position of a float in a tapered tube','The color of the air hose','The temperature of the compressor oil','The weight of a cylinder'],c:0,e:'A rotameter is a variable-area flow meter. Flow is read from the float position against its scale.'},
  {s:'209.08',q:'When reading a pneumatic pressure gauge, you should:',a:['Read the pointer at eye level using the correct scale and units','Stand far away and estimate the value','Read the smallest scale regardless of units','Tap the gauge while pressurized'],c:0,e:'Eye-level reading prevents parallax, and the correct scale and units must be selected.'},
  {s:'209.08',q:'As air temperature increases in a fixed-volume pneumatic system, pressure generally:',a:['Increases if the amount of gas remains constant','Always becomes zero','Decreases regardless of volume','Is unaffected under all conditions'],c:0,e:'The combined gas law relates pressure, volume, and absolute temperature. At fixed volume and gas amount, pressure rises with absolute temperature.'},
  {s:'209.09',q:'What is the purpose of a pneumatic filter?',a:['Remove particles and condensed moisture from compressed air','Increase cylinder bore size','Generate compressed air','Set electrical voltage'],c:0,e:'Filters protect downstream components by removing solid particles and, depending on design, liquid contaminants.'},
  {s:'209.09',q:'Before draining a pneumatic filter bowl, you should:',a:['Follow the manufacturer’s procedure and ensure the bowl is safe to drain','Pressurize the bowl above its rating','Remove the bowl while fully pressurized','Use an open flame to evaporate water'],c:0,e:'Filter bowls can contain stored pressure. Use the drain and isolation procedure specified by the manufacturer.'},
  {s:'209.09',q:'An air lubricator adds:',a:['A controlled amount of oil mist to lubricate compatible downstream components','Water to the receiver','Electrical current to the valve','Pressure to an empty tank'],c:0,e:'Lubricators meter oil into the air stream. Only components designed for lubrication should receive it.'},
  {s:'209.09',q:'If a lubricator rate is too high, it may:',a:['Over-lubricate components and contaminate the circuit','Remove all moisture from the air','Increase filter efficiency','Make the compressor silent'],c:0,e:'Lubricator adjustment should provide only the amount recommended by the equipment manufacturer.'},
  {s:'209.02',q:'A pressure gauge primarily measures:',a:['Pressure relative to its reference, commonly atmospheric pressure for a gage','Air cleanliness only','Flow volume per minute only','Cylinder stroke length'],c:0,e:'A gage normally displays pressure relative to atmospheric pressure. Absolute pressure uses a perfect vacuum as reference.'},
  {s:'209.04',q:'A double-acting cylinder is supplied with air:',a:['To both sides of the piston for powered extension and retraction','To one side only, with a spring for both strokes','Only through its exhaust port','Only when the gauge is removed'],c:0,e:'Double-acting cylinders use pressure alternately on both piston sides to produce powered movement in both directions.'},
  {s:'209.07',q:'A major source of resistance in a pneumatic system is:',a:['Restriction caused by undersized conductors, fittings, valves, or contamination','A correctly sized open line','A clean gauge face','A labeled component'],c:0,e:'Restrictions create pressure drop and reduce available flow and force.'}
];

let attempt = [];
let answers = [];
const $ = id => document.getElementById(id);
const shuffle = items => [...items].sort(() => Math.random() - 0.5);

function startTest() {
  attempt = shuffle(questions).slice(0, 30).map(item => ({...item, a: shuffle(item.a.map((text, index) => ({text, correct:index === item.c})))}));
  answers = Array(attempt.length).fill(null);
  $('start-screen').classList.add('hidden');
  $('results-screen').classList.add('hidden');
  $('test-screen').classList.remove('hidden');
  renderTest();
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderTest() {
  $('progress-text').textContent = `${attempt.length} questions`;
  $('answered-text').textContent = '0 answered';
  $('progress-bar').style.width = '0%';
  $('quiz-form').innerHTML = attempt.map((item, i) => `
    <article class="question">
      <div class="standard">Standard ${item.s}</div>
      <h2>${i + 1}. ${item.q}</h2>
      <div class="options">${item.a.map((choice, j) => `<label class="option"><input type="radio" name="q${i}" value="${j}"><span>${String.fromCharCode(65+j)}. ${choice.text}</span></label>`).join('')}</div>
    </article>`).join('');
  $('quiz-form').addEventListener('change', updateProgress);
}

function updateProgress() {
  answers = attempt.map((_, i) => document.querySelector(`input[name=q${i}]:checked`)?.value ?? null);
  const count = answers.filter(value => value !== null).length;
  $('answered-text').textContent = `${count} answered`;
  $('progress-bar').style.width = `${count / attempt.length * 100}%`;
}

function submitTest() {
  updateProgress();
  const unanswered = answers.filter(value => value === null).length;
  if (unanswered && !confirm(`${unanswered} question${unanswered === 1 ? '' : 's'} unanswered. Submit anyway?`)) return;
  const score = attempt.reduce((total, item, i) => total + (answers[i] !== null && item.a[Number(answers[i])].correct ? 1 : 0), 0);
  $('test-screen').classList.add('hidden');
  $('results-screen').classList.remove('hidden');
  $('score-heading').textContent = `${score} / ${attempt.length} correct (${Math.round(score / attempt.length * 100)}%)`;
  $('score-summary').textContent = score >= 24 ? 'Strong work — keep reviewing the missed concepts.' : 'Keep practicing — use the review below to target the concepts you missed.';
  $('review').innerHTML = `<h2 class="review-title">Question review</h2>${attempt.map((item, i) => {
    const selected = answers[i] === null ? 'Not answered' : item.a[Number(answers[i])].text;
    const correct = item.a.find(choice => choice.correct).text;
    const isCorrect = answers[i] !== null && item.a[Number(answers[i])].correct;
    return `<article class="question ${isCorrect ? 'correct' : 'incorrect'}"><div class="standard">Standard ${item.s}</div><h2>${i + 1}. ${item.q}</h2><p class="${isCorrect ? 'correct-text' : 'incorrect-text'}">${isCorrect ? 'Correct' : 'Needs review'}</p><p><strong>Your answer:</strong> ${selected}</p>${isCorrect ? '' : `<p><strong>Correct answer:</strong> ${correct}</p>`}<div class="answer-note"><strong>Why:</strong> ${item.e}</div></article>`;
  }).join('')}`;
  window.scrollTo({top:0,behavior:'smooth'});
}

$('start-btn').addEventListener('click', startTest);
$('submit-btn').addEventListener('click', submitTest);
$('retry-btn').addEventListener('click', startTest);
