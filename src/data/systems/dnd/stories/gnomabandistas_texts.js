export const GNOMABANDISTAS_TEXTS = {

  en: {

    inicio: () => `The bells of Valdris have been ringing for hours, their echo bouncing off the cobblestone streets with an urgency that bodes nothing good. You arrive in the city at the worst possible moment: when rumors are already spreading faster than the truth, when people speak in hushed voices and look over their shoulders. Someone robbed the monarch's treasury chamber during the night. No sign of forced entry, no witnesses, no logical explanation. Just the absence.

Before you can get your bearings among the nervous crowd, a hand lands on your shoulder with the familiarity of someone who knows exactly who belongs in this city and who doesn't. A guard with a serious expression looks you up and down and nods slowly, as if confirming something he already expected. "You. You look like someone who knows how to solve problems." It's not a question. "The Captain needs to speak with you right now." It's not exactly an invitation either.`,

    reunion_capitana: (character) => {
      const intros = {
        human: `Captain Aldara receives you without preamble. "Glad you're here. I need someone from outside the guard, someone I can trust precisely because they don't owe anything to anyone in this city."`,
        elf: `Captain Aldara studies you for a moment before speaking. "An elf. Good. Your people observe where others don't look. I hope that reputation is justified."`,
        dwarf: `Captain Aldara nods with respect when you enter. "A dwarf. Stubborn as a rock, they say. Today that is exactly what I need. Someone who doesn't give up."`,
        halfling: `Captain Aldara blinks, slightly surprised when she sees you, but composes herself immediately. "Don't let your size fool you or me. If you're here it's because you're good. Prove it."`,
        dragonborn: `Captain Aldara doesn't entirely hide her discomfort, but holds her composure. "I'll be direct: you weren't my first choice. But times are desperate. I need discretion and capability. You have both, or so I'm told."`,
      };
      return `${intros[character.race]}

"Last night someone emptied the monarch's treasury chamber." Aldara speaks without detours, with the voice of someone who has been awake since the disaster was found. "Three locks, all intact. No sign of violence. The guard on duty swears he saw nothing." She pauses. "Either he's lying, or something happened that has no reasonable explanation. For now, I prefer the first option."

She moves to the window and lowers her voice. "The monarch returns in three days. If this becomes public before we resolve it, there will be consequences neither of us wants to see. I need you to investigate outside the official guard, someone who can move without everyone knowing who they're working for." She looks at you directly. "Can you do that?"`;
    },

    camara_tesoro: () => `The treasury chamber smells of damp stone and absence. Three different locks, none of them forced, none of them scratched. The guard who accompanies you to the door doesn't come in: he stays at the threshold with his arms crossed and the expression of someone who would rather be anywhere else.

The stone floor shows no drag marks. The walls have no damage. Everything seems to be in its place, which is precisely the problem: whoever did this entered and left without leaving a visible trace. Or that's what they want you to think.`,

    camara_exito: () => `You take your time. You start with the locks. The first and second show nothing unusual. But on the lower edge of the third, almost invisible from normal standing height, there is a series of tiny scratches, perfectly regular, as if someone had worked with a very fine tool for a long time. Too fine for a normal-sized adult hand.

You crouch down. In the dust on the floor, near the smallest window, footprints appear. Tiny ones. And next to them, almost buried among the dust particles, a broken lockpick the size of your little finger. Someone very small and very skilled was here. And they knew exactly what they were doing.`,

    camara_fallo: () => `You inspect every corner of the room carefully. The locks reveal nothing obvious. Neither does the floor. You run your fingers along the window frames, examine the walls, look for marks that shouldn't be there. Nothing.

Either there's nothing to find, or you're looking in the wrong places. The feeling persists that something doesn't add up, that there's a missing piece in this overly clean picture, but you can't identify it. Perhaps someone else saw something. Perhaps the answers are outside this room.`,

    interrogar_guardia: () => `The barracks smell of sweat and torch oil. Berton has his uniform poorly buttoned, dark circles from someone who hasn't slept, and the clenched jaw of someone who has spent hours preparing for a conversation he doesn't want to have. He receives you standing, arms crossed, in the center of the room.

"I already spoke with the Captain this morning," he says before you open your mouth. "I have nothing new to add."`,

    guardia_exito: () => `There is a moment when something breaks in Berton's expression. It's not a sudden collapse: it's more like watching someone set down a weight they've been carrying too long.

"All right." He glances toward the door to the hallway, then back at you. He lowers his voice to barely audible. "They paid me. A gnome, no taller than this." He marks a height with his hand at hip level. "Ridiculous hat, too big for his head. He gave me a bag with enough coins not to ask questions and told me that in an hour nothing would have happened." He swallows with difficulty. "I don't know his name. But I've seen him before near the port. Ask for someone they call El NoHomo. That's where you'll pull the thread."

He turns toward the window. The conversation is over.`,

    guardia_fallo: () => `Berton doesn't budge an inch. "I already said everything I know this morning. I saw nothing, heard nothing." His voice is flat, rehearsed. The voice of someone who has been repeating the same story for hours and has turned it into a reflex.

When he turns to signal that the conversation is over, your gaze falls involuntarily to his feet. New boots. Fine leather, well-stitched, the kind you don't buy on a second-rate guard's salary. He wears them with the discomfort of someone not used to good footwear.

It's not proof. But it's something.`,

    guardia_tension: () => `Berton goes rigid. There is a moment of calculation in his eyes, a moment where he weighs his options, and then he opens his mouth and shouts toward the hallway:

"Hey! Over here! I need help!"

The footsteps arrive quickly. Too quickly to be a coincidence: they were close, waiting. Two guards burst into the room with their hands already on their hilts. They don't have the face of people coming to mediate.`,

    guardia_combate_victoria: () => `The silence that follows is immediate and uncomfortable. Two guards on the floor, Berton shouting something from the end of the hallway while you're already in the street, moving through the crowd with your head low.

Your hands tremble slightly. Not from fear, but from adrenaline that hasn't found anywhere to go yet. You didn't get what you needed from Berton, but what you did get has its own value: that man has something to hide, and the two guards he called for help didn't seem interested in asking questions. The corruption goes higher than the Captain suspected.

The port. Always the port.`,

    mercado_rumores: (character) => {
      const racePart = {
        human: `People talk to you with relative normality. Among the noise you catch fragments: "they say it was magic", "nobody gets through those locks without inside help", "I've seen strange people near the port lately."`,
        dwarf: `People talk to you with relative normality. Among the noise you catch fragments: "they say it was magic", "nobody gets through those locks without inside help", "I've seen strange people near the port lately."`,
        elf: `Your presence generates some distance, but an elderly herbalist takes you for one of their own in discretion. He whispers: "Those who did it are not from here. They are small and fast. I saw them pass two nights ago loaded with sacks."`,
        halfling: `Nobody takes you seriously at first, which turns out to be useful. A girl points at you without filter: "The weird little men from the port, do you know them? They gather at night near the water and never look anyone in the eye. I avoid them."`,
        dragonborn: `People step aside as you pass. But fear also makes people talk: a nervous vendor lets slip more than he intended. "I don't know anything! Only that the new middleman at the port, the one they call El NoHomo, started operating just last week and already has half the docks in his pocket."`,
      };

      const roguePart = character.class === 'rogue'
        ? `\n\nAn old contact from the thieves' guild finds you before you even ask. "I owe you one. Those who pulled the treasury job are not guild members, they're freelance. They call themselves the Gnomabandistas. Their leader is a fellow called DaBiZ. You'll find them by following a kind of spiral G scratched into the walls, near the port sewers."`
        : '';

      return `The market is buzzing with rumors this morning. People talk in huddles, merchants lower their voices when guards walk past.\n\n${racePart[character.race]}${roguePart}`;
    },

    convergencia_puerto: (character, flags) => {
      let arrival = '';

      if (flags?.gnomo_sombrero_nohomo || flags?.knows_nohomo) {
        arrival = `You have a name: El NoHomo. And that name, from what you found out, moves through the port like a fish in water. It's not much, but it's a thread to pull. `;
      } else if (flags?.corrupcion_interna || flags?.guardia_sobornado) {
        arrival = `Berton didn't talk, but his new boots speak for him. Someone is paying for certain people to look the other way, and that money comes from somewhere. Everything points to the port. `;
      } else if (flags?.gnomabandistas_simbolo) {
        arrival = `You keep the name echoing in your head: the Gnomabandistas. And the mark you were told to look for should be somewhere in the port, according to your contact. `;
      } else if (flags?.ladrones_pequenos || flags?.nohomo_puerto) {
        arrival = `The market rumors were loose fragments, but they all pointed in the same direction. Small people moving at night, a new middleman with too much influence. Someone is operating from the docks. `;
      } else if (flags?.ganzua_gnomica) {
        arrival = `The footprints you found in the treasury chamber were tiny, and that broken lockpick isn't made by any craftsman in Valdris you know. Someone from outside, someone very small, who knows what they're doing. Outsiders with that profile tend to pass through the port. `;
      } else if (flags?.sensacion_ladron_pequeno) {
        arrival = `You didn't find concrete evidence in the chamber, but the feeling persists: whoever did it was small, agile, and knew the place well. This isn't a city thief. The port is the logical next step. `;
      } else {
        arrival = `The paths cross here. Everything you've seen and heard this morning points in the same direction. `;
      }

      return `${arrival}The smell of salt and wet wood greets you as you descend toward the docks. Valdris port at this hour is a maze of calculated activity: fishermen pulling nets with too much haste, stevedores moving bundles without looking at anyone, taverns where conversations cut short as soon as the door opens. This is where money moves that doesn't want to leave a trail, where strangers pass without anyone noting their names. If there's anything to find, it's between these docks.`;
    },

    puerto_sigilo: () => `You separate from the traffic of the main street and slip between the warehouses. The light is scarce, filtered between buildings that seem to have grown over each other without any plan. There is unusual movement near the third dock: bundles moving without anyone announcing them, figures circulating too slowly to be workers in a hurry.

You stay still. You watch.`,

    puerto_sigilo_exito: () => `From your position you watch two hooded figures of small stature unloading something from an unmarked cart toward a sewer grate. They work in silence with an efficiency that indicates practice. When they finish, one of them pauses for a moment by the wall of the nearest warehouse and makes a brief gesture with their hand before disappearing through the grate.

You approach when the path is clear. On the wall, at knee height, almost invisible among the damp and grime, there is a mark scratched into the stone: a spiral G, crude but deliberate. It's not a scrawl. It's a signal.`,

    puerto_combate: () => `You don't quite process the situation before it gets worse. A man who practically blocks the light between two warehouses turns toward you with the calm of someone who isn't in any hurry because he knows exactly how this ends.

"Looking for something, stranger?" The question doesn't wait for an answer. Behind him, two more materialize from the shadows. They're not wearing guard uniforms. They wear the expression of people someone pays to make problems disappear.`,

    puerto_combate_victoria: () => `The last of the three goes down and silence returns to the alleyway. Something aches that you didn't know could ache, and the adrenaline is starting to transform into that specific exhaustion that only comes from having fought for real.

But before you leave, one of them has dropped something on the ground: a folded piece of paper with oil stains on the edges. You unfold it. It's a rudimentary map of the port, drawn by hand, with a single mark: a spiral G pointing to a location in the sewers. Whoever sent these three knew you were going to ask questions. That means you're on the right track.`,

    puerto_capturado: () => `The blow comes from where you weren't looking. A moment of sudden darkness, and then nothing.

When you regain consciousness, you're on the floor of a warehouse that smells of stale salt and rotting wood. Hands tied behind your back, a pain in your head that pulses with each heartbeat. The place is empty. Whatever they wanted from you, either they already have it, or they decided it wasn't worth the effort.

You take too long to free yourself. When you finally manage it and get outside, the sun is in a different position. You've lost hours. And yet, when you lean against the wall to catch your breath, you see exactly what you needed: a spiral G scratched into the stone, pointing downward. At least they didn't take that from you.`,

    puerto_preguntar: () => `There's a tavern at the entrance to the third dock that has all the signs of being the kind of place where people go when they don't want to be seen anywhere else. You push the door open. The noise of conversations cuts off midway and several pairs of eyes turn toward you before returning to their business with studied indifference.

You plant yourself at the bar and ask loudly enough that whoever needs to hear it can.`,

    puerto_preguntar_exito: () => `The innkeeper has been cleaning the same glass for a while. He doesn't look at you directly. But he doesn't move away either.

When he finally speaks, he does so without raising his eyes. "I don't know what you're talking about." A long pause. The cloth keeps rubbing the glass. "But if you were looking for something in this port, I'd look at that back wall before leaving."

There's a mark on the stone, next to the back door. A spiral G. "Follow the ones you find," says the innkeeper, already turning toward the other end of the bar. "And don't mention my name."`,

    puerto_preguntar_fallo: () => `The bar gives you nothing. The conversations don't quite stop but drop in volume, and the answers you get range from silence to a shrug that clearly means they're not telling you anything.

Leaving empty-handed is always a possibility in this line of work.

But as you cross the threshold back to the street, someone brushes your arm without stopping. When you look down, there's a crumpled piece of paper in your hand. It only has a scrawl drawn on it: a spiral G. No signature, no explanation. Someone inside wanted to help you without being seen doing it.`,

    puerto_picaro: () => `You know these kinds of places better than you'd like to admit. Valdris port isn't very different from other ports: the same movement patterns, the same signals if you know what to look for, the same faces of people watching without appearing to watch.

In twenty minutes you have the mental map done. The observation points, the alleys that lead to places they don't want you to see, and the same mark repeated in three different places: a spiral G scratched into the stone, discreet as a secret, obvious as a path for someone who knows how to look. The sewers. Of course.`,

    alcantarillas_entrada: () => `The grate isn't locked, which in itself is information. Valdris's sewers are old and the smell proves it, but the path you follow doesn't seem abandoned: the grime on the floor has recent footprints, and the spiral mark appears on the walls every so often, scratched at different heights as if left by people of different sizes.

The sound of voices arrives before you see any light. Someone is arguing at some point ahead, with the confidence of someone who feels safe on their own ground.`,

    escondite_sigilo: (character) => `You move pressed against the wall, stepping where there is no water, avoiding areas where the stone sounds different under weight. The voices become clearer as you advance.${character.isInjured ? '\n\nThe blow you took earlier is still taking its toll. Every sharp movement is a reminder that you\'re not at a hundred percent.' : ''}`,

    escondite_sigilo_exito: () => `The room you reach is large for being under a city, improvised in the way that only spaces are when someone decided to use them because no one else had claimed them. Crates stacked almost to the ceiling, a map of Valdris spread on a table with marks you don't recognize, candles that have been burning for hours.

And in the center, three figures arguing at the volume of someone not expecting visitors: a stocky gnome with enough gears and gadgets hanging from his belt to open a shop, a short-horned Tiefling with a permanently offended expression, and a gnome in a patched cassock murmuring something quietly between the other two's sentences, as if carrying a parallel conversation with someone the others can't see. Of the rest of the group, no sign.`,

    escondite_escuchar: () => `You stay still and listen.

The gnome with gears gestures as he talks, threatening to knock half a dozen gadgets to the floor with every movement. "I'm telling you, we should have taken the candelabras too! They were solid silver, I saw them—"

"Molibdeno." The Tiefling's voice has the temperature of iron in winter. "Shut. Up."

"Lord DaBiZ will return soon," says the one in the cassock, without looking up from whatever he's reading. "Have faith, Tecnecio. And you, Molibdeno, stop taking inventory of what we didn't take."

Molibdeno. Tecnecio. And the one in the cassock, who would be Genomo judging by the cross-references you just made mentally. Three of them, and a fourth on the way. DaBiZ. They're waiting for someone.`,

    escondite_combate_gnomos: () => `There's no clean way to do it, so you don't look for one. You go in, or you're discovered: the result is the same immediate chaos.

Molibdeno throws the first thing he has at hand, which turns out to be a contraption that explodes in the wrong direction and fills the room with smoke and the smell of burned sulfur. Tecnecio raises his hand and the air crackles before a bolt grazes your left ear and leaves a black mark on the wall. Genomo closes his eyes, clasps his hands, and begins to murmur something that might be a blessing but which, judging by the results, isn't working particularly well.`,

    escondite_capitan: () => `Captain Aldara doesn't waste time on dramatics. She arrives with six guards she clearly chose carefully, gets them into position without saying a single unnecessary word, and then looks at you. "Well done for warning me. Now we go in together and we do this in an orderly fashion."

The idea of doing it in an orderly fashion lasts exactly until Molibdeno sees the torches and panics, Tecnecio decides that a spell is always a better answer than surrender, and Genomo begins to pray aloud with a conviction that in other circumstances would be almost admirable. The room takes several confused minutes to calm down, but the result is as expected.`,

    escondite_directo: () => `Sometimes the most direct solution is simply the most honest one. You find what passes for a door, take a step back, and go in.

The three inside take exactly one second to process what's happening. You use that second.`,

    libro_cuentas: () => `While the three are busy arguing among themselves, your hands work on their own. You go through the crates methodically, lifting corners, checking bottoms, looking for the kind of hiding place only used by someone who doesn't entirely trust their own associates.

Under a loose plank in the floor, wrapped in waxed cloth to protect it from the damp, there is a notebook bound in green leather. You open it. Names, dates, amounts. Ordered columns in a small, precise handwriting. You recognize some of the names: palace officials, a judge, three merchants with permanent stalls in the central market. And at the end of the last page, underlined twice, the name of someone with direct access to the monarch.

This isn't the record of a heist. It's the operational archive of someone who has spent years building something much larger.`,

    encuentro_dabiz: (character, flags) => {
      const knowsName = flags?.knows_dabiz_name || flags?.knows_nohomo;
      const hasLedger = flags?.has_ledger;

      const intro = `You hear him before you see him. A calm, almost bored voice. "I knew you'd find your way here sooner or later."

From the shadows emerges a gnome unlike any you've seen before. Broad-shouldered, with an impossibly stocky build for his size, with the neck of a bull and the fists of someone who has won many fights and enjoyed every one of them. Running across his left cheekbone, a dark tribal tattoo that gives him an air somewhere between fierce and aristocratic. At his side, a gnome with a predator's eyes and two daggers at her belt, already in hand.`;

      const greeting = knowsName
        ? `\n\n"DaBiZ El-NoHomo in person. Shorter than I expected."`
        : `\n\nThe gnome smiles at your expression. "Looking for El NoHomo? Well, you've found him."`;

      const ledgerLine = hasLedger
        ? `\n\n"I see you found my accounts book. How inconvenient." The smile doesn't fade. "That changes things."`
        : '';

      return `${intro}${greeting}${ledgerLine}\n\n"Do you know how many people have tried to stop me?" The smile doesn't fade. "Interesting that you've made it this far."`;
    },

    encuentro_dabiz_capitan: () => `Captain Aldara enters behind you and the calculation in DaBiZ's eyes is immediate and unmistakable. He looks at the reinforcements, weighs the exits, considers his companion in a glance. She shakes her head almost imperceptibly.

"Interesting." DaBiZ adjusts the brim of his hat with two fingers, a gesture that seems more of courtesy than nervousness. "I must admit I didn't expect the move of warning the guard." A pause. "Even so, I don't intend to surrender without making this cost something."`,

    combate_final: () => `His companion moves first, and she does so with a speed that doesn't match her size. The daggers appear in her hands as if they'd always been there, and the distance between you disappears before you've finished processing the movement.

At the far end of the room, DaBiZ has begun to murmur. The words are in a language you don't recognize, but the effect is visible: the air around him takes on a different density, and the tribal tattoo on his left cheekbone emits a faint glow with each syllable. There's no time to wait and see where that leads.`,

    camino_acusacion: () => `You don't quite recover before things get worse.

The city guard arrives in force, and not alone: a corrupt guard is among them, with the posture of someone who has made a decision and decided not to turn back. He raises his arm and points at you with a finger that doesn't tremble enough to be innocent.

"That one. I saw them leaving the treasury chamber last night." His voice is firm, rehearsed, perfect. The voice of someone who has spent hours preparing this moment. "They're the thief."

The problem with being a stranger in a city that doesn't know you is that no one can say with certainty that isn't true.`,

    persecucion: () => `Within minutes your name is on the lips of everyone who has reasons to want someone to be guilty. The corrupt guards have done their job well: you're new to the city, you have no one to vouch for you, and the story they've built is solid enough to hold for the necessary time.

The streets narrow around you. Every corner may have someone waiting. You need to get out of here now.`,

    final_bueno: () => `Valdris plaza dawned differently that day. DaBiZ El-NoHomo in irons, with his ridiculous hat confiscated and an expression that isn't entirely defeat but rather someone mentally cataloguing what went wrong so as not to repeat it. Yeromi at his side, eyes forward, not giving the satisfaction of any visible reaction. The monarch's treasure, recovered and accounted for down to the last item.

Captain Aldara spoke before the assembled guard and pronounced your name with the same precision with which she does all things. It wasn't a long speech. Aldara doesn't make long speeches. But it was enough.

As they were led away, DaBiZ turned his head toward you. The expression on his face wasn't what you expected: it wasn't rage or humiliation. It was something that dangerously resembled the consideration of someone evaluating a rival. "Until next time, stranger," he said, quietly enough that only you could hear. And something in his tone told you it wasn't an empty threat.`,

    final_neutral: () => `The treasure is back in the monarch's coffers, which is what matters according to Captain Aldara, and in practical terms she's right. But there's something that doesn't sit well in the way this ended.

At the last second, when the perimeter was already closed and there was no visible exit, DaBiZ and Yeromi found one. A passage none of you had identified, narrow, perfectly calculated. They disappeared into Valdris's sewer system as if the water had absorbed them.

Aldara signed the agreed payment without saying much. "You did what I asked" was all. Your name won't appear in official records. In the city's underworld, however, a story is already circulating about a stranger who came very close. Stories about those who almost made it also have their value, even if it costs something to admit it.`,

    final_malo_1: () => `DaBiZ didn't need to raise his voice. He just raised his hand.

The air became thick in a way that had no physical explanation, as if there was suddenly too much weight in it, and your knees decided on their own that the floor was a good place to be. "You're not a bad person," DaBiZ said, looking down at you with something resembling genuine pity. "You got quite far, actually. Another day, perhaps."

When you were able to move again, the hideout was empty. Clean, almost. As if nothing had ever happened.

Captain Aldara listened to you all the way through without interrupting. Then she looked for a long moment toward the window. "Rest" was all she said. The money that passed from her hand to yours was less than agreed, and you both knew why. Nobody spoke of the failure out loud. But in Valdris, silence also communicates.`,

    final_malo_2_escape: () => `You made it out. That's what you tell yourself as Valdris's walls shrink behind you, as the road under your feet is the only plan you have.

On the notice board at the north gate, you managed to read your description before passing through. Whoever wrote that text knew you quite well: the details are precise, the reward is generous enough to be worthwhile, and the accusation is specific enough to be hard to refute without evidence you no longer have.

Valdris falls behind you. The real culprit is still inside its walls, probably already working on the next job. And you on the road, with nothing except the certainty that you know how this story ends even if you can't tell it.`,

    final_malo_2_arrestado: () => `The bars of the cell are old and rusted at the joints, which is the first thing you notice because your mind needs to focus on something other than the situation in its entirety.

Nobody listens to your story. Not because you don't have one: you do, complete, with logic and details that any competent investigator could verify. The problem is that competent investigators have reasons not to want to verify it. The witnesses who could back you up are on the payroll of the wrong people. And you're a stranger, which means in Valdris you're nobody until someone decides who they want you to be.

The real culprit is never found. The treasure, never recovered. And you with all the time in the world to think about the exact moment things went wrong, and whether you could have done something differently.`,

    final_malo_2_muerte: () => `There are too many of them. That's the last thing you process clearly before the numbers become unmanageable and the outcome stops being in doubt.

The final thought that crosses your mind has the specific taste of irony: you came to Valdris to solve a crime and you're going to end up as one. The real culprit is still free. The treasure is still lost. And the city will carry on tomorrow as if nothing happened, because cities always do.`,

    final_secreto: () => `Captain Aldara took longer than usual to react when you placed the green leather-bound book on her desk. She read it slowly, turning the pages carefully, and the silence in the room changed texture as she progressed.

When she looked up, you had in front of you someone who had just learned something that fundamentally changes how they understand the place where they've been working for years. "This goes much higher up than I thought," she said, and in her voice there was something you hadn't heard before: not exactly fear, but something adjacent to it.

DaBiZ was arrested without resistance. He knew what the book in the Captain's hands meant, and he knew that fighting at that point didn't change anything that wasn't already decided. One by one, in the days and weeks that followed, the names in the register had consequences. Some fell quickly. Others had time to hide.

Your name doesn't appear in any official report. It's too dangerous for it to appear. But the bag Aldara put in your hands weighed considerably more than agreed, and the phrase with which she bid you farewell was clear enough: "You were never here."

You walked out into the streets of Valdris, which was still the same city but which you now knew wasn't entirely, and that had to be enough.`,

    choices: {
      reunion_capitana: [
        '"I\'ll start with the treasury chamber."',
        '"I want to talk to the guard on duty."',
        '"First I\'ll listen to what people in the market say."',
      ],
      convergencia_puerto: [
        '"I move quietly and observe."',
        '"I ask openly about El NoHomo."',
        '"I know how this world works. I know where to look."',
        '"I ask about suspicious activity at the port."',
      ],
      alcantarillas_entrada: [
        '"I move forward quietly."',
        '"I go back to warn the Captain first."',
        '"I go in directly."',
      ],
      escondite_sigilo_exito: [
        '"I listen to what they say before acting."',
        '"I jump on them by surprise."',
        '"I take the chance to search the room before they see me."',
      ],
      encuentro_dabiz: [
        '"Surrender. The Captain already has proof of everything."',
        '"This ends here."',
      ],
    },
  },

  ru: {

    inicio: () => `Колокола Валдриса звонят уже несколько часов, и их эхо отскакивает от мощёных улиц с тревогой, не предвещающей ничего хорошего. Вы прибываете в город в самый неподходящий момент: когда слухи уже распространяются быстрее правды, когда люди говорят вполголоса и оглядываются. Кто-то ограбил королевскую казну ночью. Никаких следов взлома, никаких свидетелей, никакого логического объяснения. Только отсутствие.

Прежде чем вы успеваете сориентироваться в нервной толпе, чья-то рука опускается на ваше плечо с фамильярностью человека, который знает в лицо каждого в этом городе. Стражник с серьёзным выражением смотрит на вас с ног до головы и медленно кивает, словно подтверждая то, что уже ожидал. "Ты. Ты похож на того, кто умеет решать проблемы." Это не вопрос. "Капитан должна поговорить с тобой прямо сейчас." Это тоже не совсем приглашение.`,

    reunion_capitana: (character) => {
      const intros = {
        human: `Капитан Альдара принимает вас без предисловий. "Рада, что вы здесь. Мне нужен кто-то со стороны, кому я могу доверять именно потому, что он никому ничего в этом городе не должен."`,
        elf: `Капитан Альдара изучает вас мгновение перед тем, как заговорить. "Эльф. Хорошо. Ваш народ замечает то, чего другие не видят. Надеюсь, эта репутация оправдана."`,
        dwarf: `Капитан Альдара кивает с уважением, когда вы входите. "Гном. Упрямый как скала, говорят. Сегодня это именно то, что мне нужно. Кто-то, кто не сдаётся."`,
        halfling: `Капитан Альдара слегка удивлённо моргает, увидев вас, но тут же берёт себя в руки. "Пусть ваш размер не обманет ни вас, ни меня. Если вы здесь, значит вы хороши. Докажите это."`,
        dragonborn: `Капитан Альдара не вполне скрывает своё беспокойство, но держится. "Буду прямой: вы не были моим первым выбором. Но времена отчаянные. Мне нужны осторожность и способности. У вас есть и то, и другое, если верить словам."`,
      };
      return `${intros[character.race]}

"Прошлой ночью кто-то опустошил королевскую казну." Альдара говорит без обиняков, голосом человека, который не спал с тех пор, как обнаружили катастрофу. "Три замка, все целы. Никаких следов насилия. Дежурный стражник клянётся, что ничего не видел." Пауза. "Либо он лжёт, либо произошло что-то, не имеющее разумного объяснения. Пока предпочитаю первый вариант."

Она подходит к окну и понижает голос. "Монарх возвращается через три дня. Если это станет известно до того, как мы всё решим, последствия никому из нас не понравятся. Мне нужно, чтобы вы расследовали дело вне официальной стражи, кто-то, кто может передвигаться, не привлекая внимания." Она смотрит прямо на вас. "Вы можете это сделать?"`;
    },

    camara_tesoro: () => `Казна пахнет сырым камнем и отсутствием. Три разных замка, ни один не взломан, ни один не поцарапан. Стражник, который проводил вас до двери, не входит: он остаётся на пороге со скрещёнными руками и выражением человека, который предпочёл бы находиться где угодно ещё.

Каменный пол не имеет следов волочения. Стены не повреждены. Всё кажется на своём месте, что и есть именно проблема: тот, кто это сделал, вошёл и вышел, не оставив видимого следа. Или хочет, чтобы вы так думали.`,

    camara_exito: () => `Вы не торопитесь. Начинаете с замков. Первый и второй не показывают ничего необычного. Но на нижнем крае третьего, почти невидимые с нормальной высоты, есть серия крошечных царапин, идеально равномерных, словно кто-то работал очень тонким инструментом долгое время. Слишком тонким для руки взрослого нормального размера.

Вы приседаете. В пыли на полу, рядом с самым маленьким окном, появляются следы. Крошечные. И рядом с ними, почти похороненная среди пылинок, сломанная отмычка размером с ваш мизинец. Здесь был кто-то очень маленький и очень умелый. И они знали точно, что делали.`,

    camara_fallo: () => `Вы тщательно осматриваете каждый угол комнаты. Замки не открывают ничего очевидного. Пол тоже. Вы проводите пальцами по оконным рамам, осматриваете стены, ищете метки, которых там быть не должно. Ничего.

Либо здесь нечего искать, либо вы ищете не там. Ощущение не проходит — что-то не сходится, что есть недостающая деталь в этой слишком чистой картине, — но вы не можете её определить. Возможно, кто-то другой что-то видел. Возможно, ответы за пределами этой комнаты.`,

    interrogar_guardia: () => `Казарма пахнет потом и факельным маслом. Бертон носит плохо застёгнутый мундир, тёмные круги под глазами человека, не спавшего несколько дней, и сжатую челюсть того, кто несколько часов готовился к разговору, который не хочет иметь. Он встречает вас стоя, со скрещёнными руками, в центре комнаты.

"Я уже разговаривал с Капитаном этим утром", — говорит он, не дожидаясь, пока вы откроете рот. "Мне нечего добавить."`,

    guardia_exito: () => `Есть момент, когда что-то ломается в выражении Бертона. Это не внезапное падение: скорее похоже на то, как человек опускает груз, который нёс слишком долго.

"Хорошо." Он бросает взгляд на дверь в коридор, потом на вас. Понижает голос почти до неслышимого. "Мне заплатили. Гном, не выше вот этого." Он указывает рукой на уровне бедра. "Нелепая шляпа, слишком большая для его головы. Дал мне мешок с достаточным количеством монет, чтобы не задавать вопросов, и сказал, что через час ничего не произойдёт." Сглатывает с трудом. "Не знаю его имени. Но я видел его раньше у порта. Спроси про кого-то по имени Эль Нохомо. Оттуда потянешь нить."

Он оборачивается к окну. Разговор окончен.`,

    guardia_fallo: () => `Бертон не уступает ни на дюйм. "Я уже сказал всё, что знаю, этим утром. Ничего не видел, ничего не слышал." Его голос ровный, отрепетированный. Голос того, кто несколько часов повторяет одну и ту же историю и превратил её в рефлекс.

Когда он поворачивается, чтобы дать вам понять, что разговор окончен, ваш взгляд невольно падает на его ноги. Новые сапоги. Тонкая кожа, хорошо прошитые, такие не покупают на жалование стражника второй категории. Он носит их с неловкостью того, кто не привык к хорошей обуви.

Это не доказательство. Но это кое-что.`,

    guardia_tension: () => `Бертон напрягается. В его глазах мелькает момент расчёта, момент взвешивания вариантов, а затем он открывает рот и кричит в коридор:

"Эй! Сюда! Нужна помощь!"

Шаги приходят быстро. Слишком быстро для совпадения: они были близко, ждали. Два стражника врываются в комнату с руками, уже лежащими на рукоятях. У них нет вида людей, пришедших выступить посредниками.`,

    guardia_combate_victoria: () => `Тишина, которая наступает после, мгновенна и неловка. Двое стражников на полу, Бертон что-то кричит из конца коридора, пока вы уже на улице, движетесь в толпе, опустив голову.

Руки слегка дрожат. Не от страха, а от адреналина, который пока не нашёл, куда деться. Вы не получили от Бертона то, что нужно, но то, что получили, имеет свою ценность: этому человеку есть что скрывать, и двое стражников, которых он вызвал, не казались заинтересованными в вопросах. Коррупция уходит выше, чем подозревала Капитан.

Порт. Всегда порт.`,

    mercado_rumores: (character) => {
      const racePart = {
        human: `Люди разговаривают с вами относительно нормально. Среди шума вы улавливаете обрывки: "говорят, это была магия", "никто не пройдёт через эти замки без помощи изнутри", "я видел странных людей около порта в последнее время."`,
        dwarf: `Люди разговаривают с вами относительно нормально. Среди шума вы улавливаете обрывки: "говорят, это была магия", "никто не пройдёт через эти замки без помощи изнутри", "я видел странных людей около порта в последнее время."`,
        elf: `Ваше присутствие вызывает некоторую дистанцию, но пожилой травник принимает вас за своего. Он шепчет: "Те, кто это сделал, не отсюда. Они маленькие и быстрые. Я видел их две ночи назад с мешками."`,
        halfling: `Сначала никто не воспринимает вас всерьёз, что оказывается полезным. Девочка указывает на вас без лишних слов: "Странные человечки из порта, знаешь их? Они собираются ночью у воды и никогда ни на кого не смотрят. Я их избегаю."`,
        dragonborn: `Люди расступаются, когда вы проходите. Но страх тоже заставляет говорить: нервный торговец выбалтывает больше, чем намеревался. "Я ничего не знаю! Только что новый посредник в порту, тот, кого называют Эль Нохомо, начал работать всего неделю назад и уже держит полдока в кармане."`,
      };

      const roguePart = character.class === 'rogue'
        ? `\n\nСтарый знакомый из гильдии воров находит вас прежде, чем вы успеваете спросить. "Я тебе должен. Те, кто провернул дело с казной, не из гильдии, они вольные. Называют себя Гномбандисты. Их вожак — некий ДаБиЗ. Найдёшь их, следуя знаку в виде спиральной G, нацарапанному на стенах, рядом с канализацией порта."`
        : '';

      return `Рынок кипит слухами этим утром. Люди разговаривают в кружках, торговцы понижают голос, когда мимо проходят стражники.\n\n${racePart[character.race]}${roguePart}`;
    },

    convergencia_puerto: (character, flags) => {
      let arrival = '';

      if (flags?.gnomo_sombrero_nohomo || flags?.knows_nohomo) {
        arrival = `У вас есть имя: Эль Нохомо. И это имя, судя по тому, что вы узнали, движется по порту как рыба в воде. Немного, но есть за что зацепиться. `;
      } else if (flags?.corrupcion_interna || flags?.guardia_sobornado) {
        arrival = `Бертон не заговорил, но его новые сапоги говорят за него. Кто-то платит, чтобы определённые люди смотрели в другую сторону, и эти деньги откуда-то берутся. Всё указывает на порт. `;
      } else if (flags?.gnomabandistas_simbolo) {
        arrival = `В голове продолжает звучать имя: Гномбандисты. И знак, который вам посоветовали искать, должен быть где-то в порту, по словам вашего контакта. `;
      } else if (flags?.ladrones_pequenos || flags?.nohomo_puerto) {
        arrival = `Рыночные слухи были разрозненными фрагментами, но все указывали в одном направлении. Маленькие люди, двигающиеся ночью, новый посредник со слишком большим влиянием. Кто-то работает с доков. `;
      } else if (flags?.ganzua_gnomica) {
        arrival = `Следы, найденные вами в казне, были крошечными, а эта сломанная отмычка не сделана ни одним мастером Валдриса, которого вы знаете. Кто-то извне, кто-то очень маленький, знающий своё дело. Чужаки с таким профилем обычно проходят через порт. `;
      } else if (flags?.sensacion_ladron_pequeno) {
        arrival = `Конкретных доказательств в казне вы не нашли, но ощущение не проходит: тот, кто это сделал, был маленьким, ловким и хорошо знал место. Это не городской вор. Порт — следующий логичный шаг. `;
      } else {
        arrival = `Пути сходятся здесь. Всё, что вы видели и слышали этим утром, указывает в одном направлении. `;
      }

      return `${arrival}Запах соли и мокрого дерева встречает вас, когда вы спускаетесь к докам. Порт Валдриса в этот час — лабиринт рассчитанной активности: рыбаки, убирающие сети со слишком большой поспешностью, грузчики, перемещающие тюки, не глядя ни на кого, таверны, где разговоры обрываются, как только открывается дверь. Здесь движутся деньги, которые не хотят оставлять следов, здесь проходят чужаки, не записывая имена. Если что-то найти, оно — среди этих доков.`;
    },

    puerto_sigilo: () => `Вы отделяетесь от потока на главной улице и проскальзываете между складами. Света мало, он пробивается между постройками, которые, кажется, выросли одна поверх другой без всякого плана. Рядом с третьим доком необычное движение: тюки перемещаются без объявлений, фигуры передвигаются слишком медленно для работников в спешке.

Вы замираете. Наблюдаете.`,

    puerto_sigilo_exito: () => `Со своей позиции вы наблюдаете за двумя фигурами в капюшонах небольшого роста, разгружающими что-то с немаркированной телеги к канализационной решётке. Они работают в тишине с эффективностью, свидетельствующей о практике. Когда заканчивают, один из них на мгновение останавливается у стены ближайшего склада и делает краткий жест рукой, прежде чем исчезнуть через решётку.

Вы подходите, когда путь свободен. На стене, на уровне колена, почти невидимая среди влажности и грязи, есть метка, нацарапанная на камне: спиральная G, грубая, но намеренная. Это не каракуль. Это сигнал.`,

    puerto_combate: () => `Вы не успеваете полностью осознать ситуацию до того, как она ухудшается. Мужчина, который практически перекрывает свет между двумя складами, поворачивается к вам с невозмутимостью человека, которому некуда спешить, потому что он точно знает, чем это заканчивается.

"Что-то ищешь, чужак?" Вопрос не ждёт ответа. За ним из теней материализуются ещё двое. На них нет формы стражи. На них — выражение людей, которым кто-то платит, чтобы проблемы исчезали.`,

    puerto_combate_victoria: () => `Последний из трёх падает, и тишина возвращается в переулок. Что-то болит там, где раньше боли не было, и адреналин начинает превращаться в ту специфическую усталость, которая приходит только после настоящей драки.

Но прежде чем уйти, один из них уронил что-то на землю: сложенный кусок бумаги с масляными пятнами по краям. Вы разворачиваете. Это схематичная карта порта, нарисованная от руки, с единственной меткой: спиральная G, указывающая на точку в канализации. Тот, кто послал этих троих, знал, что вы будете задавать вопросы. Значит, вы на верном пути.`,

    puerto_capturado: () => `Удар приходит оттуда, откуда не ждёте. Мгновение внезапной тьмы, а потом ничего.

Когда вы приходите в себя, то лежите на полу склада, пахнущего прогорклой солью и гнилым деревом. Руки связаны за спиной, в голове пульсирует боль с каждым ударом сердца. Место пусто. Что бы им от вас ни было нужно, либо они это уже получили, либо решили, что овчинка не стоит выделки.

Освободиться удаётся слишком долго. Когда наконец выбираетесь на улицу, солнце уже в другом положении. Потеряны часы. И всё же, опираясь о стену, чтобы отдышаться, вы видите именно то, что нужно: спиральная G, нацарапанная на камне, указывающая вниз. По крайней мере, этого у вас не отняли.`,

    puerto_preguntar: () => `У входа на третий причал есть таверна с виду именно такая, куда люди идут, когда не хотят, чтобы их видели больше нигде. Вы толкаете дверь. Гул разговоров обрывается на полуслове, и несколько пар глаз оборачиваются к вам, прежде чем вернуться к своему с наигранным безразличием.

Вы становитесь у стойки и задаёте вопрос достаточно громко, чтобы тот, кому нужно услышать, мог это сделать.`,

    puerto_preguntar_exito: () => `Трактирщик уже некоторое время вытирает один и тот же стакан. Не смотрит на вас прямо. Но и не отходит.

Когда наконец говорит, то не поднимая глаз. "Не знаю, о чём ты." Долгая пауза. Тряпка продолжает тереть стекло. "Но если бы ты что-то искал в этом порту, я бы посмотрел на ту заднюю стену перед уходом."

На камне, рядом с задней дверью, есть метка. Спиральная G. "Следуй за теми, которые найдёшь", — говорит трактирщик, уже поворачиваясь к другому концу стойки. "И не упоминай моё имя."`,

    puerto_preguntar_fallo: () => `Бар ничего вам не даёт. Разговоры не прерываются полностью, но стихают, и ответы, которые вы получаете, варьируются от молчания до пожатия плечами, ясно означающего, что ничего рассказывать не будут.

Уйти ни с чем — всегда возможный исход в этом деле.

Но когда вы переступаете порог обратно на улицу, кто-то касается вашей руки, не останавливаясь. Когда вы опускаете взгляд, в руке оказывается смятый бумажный клочок. На нём только каракуль: спиральная G. Без подписи, без объяснений. Кто-то внутри хотел вам помочь, не давая себя увидеть.`,

    puerto_picaro: () => `Вы знаете такие места лучше, чем хотели бы признать. Порт Валдриса не сильно отличается от других портов: те же схемы движения, те же сигналы, если знаешь, что искать, те же лица тех, кто наблюдает, не делая вида, что наблюдает.

За двадцать минут у вас готова ментальная карта. Наблюдательные посты, переулки, ведущие в места, куда вас не хотят пускать, и та же метка, повторяющаяся в трёх разных местах: спиральная G, нацарапанная на камне, незаметная как секрет, очевидная как путь для того, кто умеет смотреть. Канализация. Конечно.`,

    alcantarillas_entrada: () => `Решётка не заперта, что само по себе информация. Канализация Валдриса старая, и запах это доказывает, но путь, по которому вы идёте, не кажется заброшенным: в грязи на полу есть свежие следы, и спиральная метка появляется на стенах через определённые промежутки, нацарапанная на разных высотах, словно её оставляли люди разного роста.

Звук голосов доносится раньше, чем вы видите какой-либо свет. Кто-то спорит где-то впереди с уверенностью человека, чувствующего себя в безопасности на своей территории.`,

    escondite_sigilo: (character) => `Вы движетесь, прижавшись к стене, ступая там, где нет воды, избегая мест, где камень под весом звучит иначе. Голоса становятся яснее по мере продвижения.${character.isInjured ? '\n\nУдар, полученный ранее, до сих пор даёт о себе знать. Каждое резкое движение напоминает, что вы не на сто процентов.' : ''}`,

    escondite_sigilo_exito: () => `Комната, которой вы достигаете, просторна для того, чтобы находиться под городом, — импровизированна так, как бывают только пространства, которые кто-то решил использовать, потому что больше никто их не занял. Ящики, сложенные почти до потолка, карта Валдриса, разложенная на столе с метками, которые вы не узнаёте, свечи, горящие уже несколько часов.

И в центре, громко спорящие, три фигуры: коренастый гном с достаточным количеством шестерёнок и приспособлений на поясе, чтобы открыть магазин, тифлинг с короткими рогами и перманентно обиженным выражением, и гном в потрёпанной рясе, тихо что-то бормочущий между фразами других двух, словно ведёт параллельный разговор с кем-то, кого остальные не видят. Остальных членов группы нет.`,

    escondite_escuchar: () => `Вы замираете и слушаете.

Гном с шестерёнками жестикулирует, разговаривая, угрожая уронить полдюжины приспособлений на пол с каждым движением. "Говорю вам, надо было взять и канделябры! Они были из чистого серебра, я видел—"

"Молибден." Голос тифлинга имеет температуру железа зимой. "Заткнись."

"Господин ДаБиЗ скоро вернётся", — говорит тот, что в рясе, не отрываясь от того, что читает. "Имейте веру, Текнесио. А ты, Молибден, прекрати составлять опись того, что мы не взяли."

Молибден. Текнесио. И тот, что в рясе, который был бы Геномо, судя по перекрёстным ссылкам, которые вы только что сделали мысленно. Трое из них, и четвёртый на подходе. ДаБиЗ. Они кого-то ждут.`,

    escondite_combate_gnomos: () => `Нет чистого способа сделать это, поэтому вы его не ищете. Вы входите, или вас обнаруживают: результат — один и тот же немедленный хаос.

Молибден бросает первое, что попадается под руку, — оказывается, это приспособление, которое взрывается не в ту сторону и заполняет комнату дымом и запахом горелой серы. Текнесио поднимает руку, и воздух трещит, прежде чем молния задевает ваше левое ухо и оставляет чёрную отметину на стене. Геномо закрывает глаза, складывает руки и начинает бормотать что-то, что может быть благословением, но которое, судя по результатам, работает не очень хорошо.`,

    escondite_capitan: () => `Капитан Альдара не тратит время на драматизм. Она прибывает с шестью стражниками, которых явно выбирала с умом, расставляет их по позициям, не говоря ни единого лишнего слова, а затем смотрит на вас. "Хорошо, что предупредили. Теперь входим вместе и делаем всё по порядку."

Идея делать всё по порядку длится ровно до того момента, когда Молибден видит факелы и паникует, Текнесио решает, что заклинание всегда лучший ответ, чем капитуляция, а Геномо начинает молиться вслух с убеждённостью, которая в других обстоятельствах была бы почти достойна восхищения. Комнате требуется несколько беспорядочных минут, чтобы успокоиться, но результат именно тот, что ожидался.`,

    escondite_directo: () => `Иногда самое прямое решение — просто самое честное. Вы находите то, что служит дверью, делаете шаг назад и входите.

Трое внутри тратят ровно одну секунду на осознание происходящего. Вы используете эту секунду.`,

    libro_cuentas: () => `Пока трое заняты спором между собой, ваши руки работают сами по себе. Вы методично обыскиваете ящики, поднимая углы, проверяя днища, ища тот вид тайника, который использует только тот, кто не вполне доверяет собственным сообщникам.

Под расшатанной доской в полу, завёрнутая в вощёную ткань для защиты от влаги, лежит тетрадь в зелёной кожаной обложке. Вы открываете её. Имена, даты, суммы. Аккуратные столбцы мелким, точным почерком. Вы узнаёте некоторые имена: дворцовые чиновники, судья, три торговца с постоянными лавками на центральном рынке. И в конце последней страницы, дважды подчёркнутое, имя кого-то с прямым доступом к монарху.

Это не запись об ограблении. Это операционный архив того, кто годами строит нечто гораздо большее.`,

    encuentro_dabiz: (character, flags) => {
      const knowsName = flags?.knows_dabiz_name || flags?.knows_nohomo;
      const hasLedger = flags?.has_ledger;

      const intro = `Вы слышите его раньше, чем видите. Спокойный, почти скучающий голос. "Я знал, что ты рано или поздно найдёшь дорогу сюда."

Из теней появляется гном, совсем не похожий на тех, что вы видели. Широкоплечий, с невозможно крепким телосложением для своего роста, с бычьей шеей и кулаками того, кто выиграл много боёв и получал от этого удовольствие. По левой скуле тянется тёмная татуировка в племенном стиле, придающая ему вид одновременно свирепый и аристократический. Рядом — гномка с хищным взглядом и двумя кинжалами на поясе, уже зажатыми в руке.`;

      const greeting = knowsName
        ? `\n\n"ДаБиЗ Эль-Нохомо собственной персоной. Ниже, чем я ожидал."`
        : `\n\nГном улыбается, видя ваше выражение. "Ищешь Эль Нохомо? Ну вот, нашёл."`;

      const ledgerLine = hasLedger
        ? `\n\n"Вижу, ты нашёл мою бухгалтерию. Как неудобно." Улыбка не исчезает. "Это меняет дело."`
        : '';

      return `${intro}${greeting}${ledgerLine}\n\n"Знаешь, сколько людей пытались меня остановить?" Улыбка не исчезает. "Интересно, что ты добрался так далеко."`;
    },

    encuentro_dabiz_capitan: () => `Капитан Альдара входит следом за вами, и расчёт в глазах ДаБиЗа мгновенен и недвусмыслен. Он смотрит на подкрепление, оценивает выходы, одним взглядом оценивает свою спутницу. Она едва заметно качает головой.

"Интересно." ДаБиЗ двумя пальцами поправляет край шляпы — жест, больше похожий на вежливость, чем на нервозность. "Должен признать, ход с предупреждением стражи я не ожидал." Пауза. "Тем не менее, я не собираюсь сдаваться, не дав этому чего-то стоить."`,

    combate_final: () => `Его спутница движется первой, и делает это со скоростью, не соответствующей размеру. Кинжалы появляются в её руках, словно всегда там были, и расстояние между вами исчезает прежде, чем вы успеваете осознать движение.

В дальнем конце комнаты ДаБиЗ начал бормотать. Слова на языке, которого вы не узнаёте, но эффект виден: воздух вокруг него приобретает иную плотность, и племенная татуировка на его левой скуле слабо светится с каждым слогом. Нет времени ждать, чем это закончится.`,

    camino_acusacion: () => `Вы не успеваете полностью прийти в себя, как всё ухудшается.

Городская стража прибывает в полном составе, и не одна: коррумпированный стражник среди них — с позой человека, принявшего решение и решившего не отступать. Он поднимает руку и указывает на вас пальцем, который не дрожит достаточно, чтобы быть невиновным.

"Вот он. Я видел, как они выходили из казны прошлой ночью." Его голос твёрдый, отрепетированный, безупречный. Голос того, кто несколько часов готовил этот момент. "Это вор."

Проблема с тем, чтобы быть чужаком в городе, который вас не знает, состоит в том, что никто не может сказать наверняка, что это неправда.`,

    persecucion: () => `В считанные минуты ваше имя на устах всех, у кого есть основания хотеть, чтобы кто-то был виновен. Коррумпированные стражники хорошо сделали свою работу: вы новичок в городе, некому за вас поручиться, и история, которую они построили, достаточно прочна, чтобы продержаться нужное время.

Улицы сужаются вокруг вас. За каждым углом может кто-то ждать. Нужно выбираться отсюда прямо сейчас.`,

    final_bueno: () => `Площадь Валдриса встретила тот день иначе. ДаБиЗ Эль-Нохомо в кандалах, с конфискованной нелепой шляпой и выражением, которое не совсем является поражением, а скорее принадлежит кому-то, мысленно каталогизирующему, что пошло не так, чтобы не повторить. Йероми рядом, взгляд вперёд, не давая удовлетворения никакой видимой реакцией. Сокровище монарха, возвращённое и пересчитанное до последнего предмета.

Капитан Альдара говорила перед собравшейся стражей и произнесла ваше имя с той же точностью, с которой делает все вещи. Это была не длинная речь. Альдара не делает длинных речей. Но этого было достаточно.

Пока их уводили, ДаБиЗ повернул голову к вам. Выражение на его лице было не тем, что вы ожидали: не ярость и не унижение. Что-то, опасно напоминающее оценку соперника. "До следующего раза, чужак", — сказал он, достаточно тихо, чтобы только вы слышали. И что-то в его тоне говорило, что это не пустая угроза.`,

    final_neutral: () => `Сокровище вернулось в королевскую казну, и это главное, по словам капитана Альдары, и в практическом смысле она права. Но есть что-то, что не вполне устраивает в том, как это закончилось.

В последнюю секунду, когда периметр уже был закрыт и видимого выхода не было, ДаБиЗ и Йероми нашли один. Проход, который никто из вас не определил, узкий, идеально рассчитанный. Они растворились в канализационной системе Валдриса, словно вода их поглотила.

Альдара подписала условленную оплату, не сказав многого. "Вы сделали то, о чём я просила" — всё. Ваше имя не появится в официальных записях. Но в преступном мире города уже ходит история о чужаке, который был совсем близко. Истории о тех, кто почти добился успеха, тоже имеют свою ценность, даже если это стоит признания.`,

    final_malo_1: () => `ДаБиЗ не стал повышать голос. Он просто поднял руку.

Воздух стал густым способом, не имеющим физического объяснения, словно в нём внезапно стало слишком много веса, и ваши колени решили сами, что пол — хорошее место для них. "Ты не плохой человек", — сказал ДаБиЗ, глядя на вас сверху вниз с чем-то похожим на подлинную жалость. "Ты зашёл довольно далеко, честно говоря. В другой день, возможно."

Когда вы снова смогли двигаться, логово было пустым. Чистым, почти. Как будто ничего никогда не было.

Капитан Альдара выслушала вас до конца, не перебивая. Затем долгое мгновение смотрела в окно. "Отдохните" — всё, что она сказала. Деньги, которые перешли из её руки в вашу, были меньше договорённого, и вы оба знали почему. Никто вслух не говорил о провале. Но в Валдрисе тишина тоже сообщает.`,

    final_malo_2_escape: () => `Вам удалось выбраться. Это то, что вы говорите себе, пока стены Валдриса уменьшаются за вашей спиной, пока дорога под ногами — единственный план, который у вас есть.

На доске объявлений у северных ворот вы успели прочитать своё описание перед тем, как пройти. Кто-то, знающий вас достаточно хорошо, написал этот текст: детали точные, вознаграждение достаточно щедрое, чтобы стоило того, а обвинение достаточно конкретное, чтобы его трудно было опровергнуть без доказательств, которых у вас уже нет.

Валдрис остался позади. Настоящий виновник по-прежнему за его стенами, вероятно, уже работая над следующим делом. И вы на дороге, ни с чем, кроме уверенности, что знаете, как заканчивается эта история, даже если не можете её рассказать.`,

    final_malo_2_arrestado: () => `Решётки камеры старые и ржавые на стыках, что является первым, на что вы обращаете внимание, потому что вашему разуму нужно сосредоточиться на чём-то, кроме ситуации в целом.

Никто не слушает вашу историю. Не потому, что у вас её нет: она есть, полная, с логикой и деталями, которые любой компетентный следователь мог бы проверить. Проблема в том, что у компетентных следователей есть причины не хотеть её проверять. Свидетели, которые могли бы вас поддержать, числятся в ведомости не тех людей. И вы чужак, что в Валдрисе означает, что вы никто, пока кто-то не решит, кем хочет вас видеть.

Настоящий виновник никогда не найден. Сокровище никогда не возвращено. И вы с неограниченным количеством времени, чтобы думать о точном моменте, когда всё пошло не так, и о том, могли ли вы сделать что-то иначе.`,

    final_malo_2_muerte: () => `Их слишком много. Это последнее, что вы ясно осознаёте, прежде чем цифры становятся неуправляемыми и исход перестаёт быть под вопросом.

Последняя мысль, мелькающая в вашем сознании, имеет специфический вкус иронии: вы пришли в Валдрис раскрыть преступление и в итоге станете одним из них. Настоящий виновник по-прежнему на свободе. Сокровище по-прежнему потеряно. И город продолжит жить завтра, как будто ничего не случилось, потому что города всегда так делают.`,

    final_secreto: () => `Капитан Альдара потратила больше времени, чем обычно, прежде чем отреагировать, когда вы положили зелёную кожаную тетрадь на её стол. Она читала медленно, осторожно перелистывая страницы, и тишина в комнате меняла текстуру по мере её продвижения.

Когда она подняла взгляд, перед вами был человек, только что узнавший нечто, фундаментально меняющее то, как он понимает место, где работал долгие годы. "Это уходит гораздо выше, чем я думала", — сказала она, и в её голосе было что-то, чего вы раньше не слышали: не совсем страх, но что-то смежное с ним.

ДаБиЗ был арестован без сопротивления. Он знал, что означает тетрадь в руках Капитана, и знал, что драться в этот момент не меняет ничего из уже решённого. Один за другим, в последующие дни и недели, имена из реестра имели последствия. Некоторые пали быстро. Другим удалось спрятаться.

Ваше имя не появляется ни в одном официальном докладе. Это слишком опасно. Но сумка, которую Альдара положила в ваши руки, весила значительно больше договорённого, и фраза, которой она попрощалась, была достаточно ясной: "Вас здесь не было."

Вы вышли на улицы Валдриса, которые оставались теми же, но которые вы теперь знали, что не совсем, и этого должно было быть достаточно.`,

    choices: {
      reunion_capitana: [
        '"Начну с казны."',
        '"Хочу поговорить с дежурным стражником."',
        '"Сначала послушаю, что говорят на рынке."',
      ],
      convergencia_puerto: [
        '"Двигаюсь тихо и наблюдаю."',
        '"Открыто спрашиваю об Эль Нохомо."',
        '"Я знаю, как устроен этот мир. Знаю, где искать."',
        '"Спрашиваю о подозрительной активности в порту."',
      ],
      alcantarillas_entrada: [
        '"Двигаюсь вперёд тихо."',
        '"Возвращаюсь предупредить капитана."',
        '"Вхожу напрямую."',
      ],
      escondite_sigilo_exito: [
        '"Слушаю, что они говорят, прежде чем действовать."',
        '"Бросаюсь на них внезапно."',
        '"Пользуюсь случаем обыскать комнату, пока меня не заметили."',
      ],
      encuentro_dabiz: [
        '"Сдавайся. У капитана уже есть все доказательства."',
        '"На этом всё закончится."',
      ],
    },
  },
};