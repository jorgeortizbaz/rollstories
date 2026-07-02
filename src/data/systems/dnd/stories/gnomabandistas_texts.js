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

    inicio: () => `Колокола Валдриса звонят уже который час, и эхо разносится по мощёным улицам с тревогой, не предвещающей ничего хорошего. Вы прибираете в город в самый неподходящий момент: слухи расходятся быстрее правды, люди говорят вполголоса и оглядываются через плечо. Ночью кто-то ограбил королевскую казну. Никаких следов взлома, никаких свидетелей, никакого разумного объяснения. Только пустота там, где раньше было золото.

Не успеваете вы сориентироваться в взволнованной толпе, как чья-то рука опускается на ваше плечо — с фамильярностью человека, который знает в лицо каждого чужака в этом городе. Стражник с суровым лицом окидывает вас взглядом с ног до головы и медленно кивает, будто подтверждая то, что уже предполагал. "Ты. Похож на того, кто умеет решать проблемы." Это не вопрос. "Капитан хочет поговорить с тобой немедленно." И это тоже не совсем приглашение.`,

    reunion_capitana: (character) => {
      const intros = {
        human: `Капитан Альдара принимает вас без лишних слов. "Хорошо, что вы пришли. Мне нужен кто-то со стороны — человек, которому я могу доверять именно потому, что он никому в этом городе ничего не должен."`,
        elf: `Капитан Альдара мгновение изучает вас, прежде чем заговорить. "Эльф. Хорошо. Ваш народ замечает то, чего не видят остальные. Надеюсь, эта репутация оправдана."`,
        dwarf: `Капитан Альдара уважительно кивает, когда вы входите. "Гном. Упрямый, как скала, — так говорят о вашем народе. Сегодня мне нужен именно такой человек. Тот, кто не сдаётся."`,
        halfling: `Увидев вас, капитан Альдара слегка удивлённо моргает, но тут же берёт себя в руки. "Пусть ваш рост не обманывает ни вас, ни меня. Если вы здесь — значит, вы хороши в своём деле. Докажите это."`,
        dragonborn: `Капитан Альдара не вполне скрывает беспокойство, но держит лицо. "Буду откровенна: вы не были моим первым выбором. Но времена отчаянные. Мне нужны осторожность и умение — а у вас, судя по слухам, есть и то, и другое."`,
      };
      return `${intros[character.race]}

"Прошлой ночью королевская казна была опустошена." Альдара говорит без обиняков — голосом человека, который не спал с той минуты, как обнаружили пропажу. "Три замка, и все целы. Никаких следов борьбы. Дежурный стражник клянётся, что ничего не видел." Она делает паузу. "Либо он лжёт, либо случилось нечто, чему нет разумного объяснения. Пока склоняюсь к первому."

Она подходит к окну и понижает голос. "Монарх возвращается через три дня. Если это станет известно раньше, чем мы всё разрешим, последствия будут неприятны для нас обоих. Мне нужно, чтобы вы расследовали это в обход официальной стражи — кто-то, кто может передвигаться по городу так, чтобы никто не знал, на кого он работает." Она смотрит вам прямо в глаза. "Справитесь?"`;
    },

    camara_tesoro: () => `В казне пахнет сырым камнем и пустотой. Три разных замка — и ни один не взломан, ни на одном ни царапины. Стражник, что провёл вас до двери, внутрь не заходит: остаётся на пороге, скрестив руки, с лицом человека, который предпочёл бы оказаться где угодно, только не здесь.

Каменный пол не хранит следов — ни волочения, ни борьбы. Стены целы. Всё выглядит нетронутым, и в этом вся проблема: кто бы это ни сделал, он вошёл и вышел, не оставив ни единого видимого следа. Или хочет, чтобы вы так думали.`,

    camara_exito: () => `Вы не спешите. Начинаете с замков. Первый и второй не выдают ничего необычного. Но на нижнем крае третьего, почти незаметные с обычной высоты взгляда, обнаруживаются крошечные, идеально ровные царапины — будто кто-то долго работал очень тонким инструментом. Слишком тонким для взрослой человеческой руки.

Вы приседаете. В пыли на полу, у самого маленького окна, проступают следы. Крошечные. А рядом с ними, почти утонувшая среди пылинок, — сломанная отмычка размером с ваш мизинец. Здесь был кто-то очень маленький и очень умелый. И этот кто-то точно знал, что делает.`,

    camara_fallo: () => `Вы тщательно осматриваете каждый угол комнаты. Замки не выдают ничего очевидного. Пол — тоже. Проводите пальцами по оконным рамам, изучаете стены, ищете метки, которых здесь быть не должно. Ничего.

То ли здесь действительно нечего искать, то ли вы смотрите не туда, куда нужно. Не отпускает ощущение, что в этой слишком опрятной картине не хватает какой-то детали, — но какой именно, вы понять не можете. Возможно, кто-то другой видел больше. Возможно, ответы стоит искать за пределами этой комнаты.`,

    interrogar_guardia: () => `В казарме пахнет потом и факельным маслом. Мундир Бертона застёгнут криво, под глазами — тёмные круги человека, который не спал несколько ночей, а челюсть сжата, как у того, кто заранее готовился к неприятному разговору. Он встречает вас стоя, скрестив руки на груди, посреди комнаты.

"Я уже всё рассказал Капитану сегодня утром," — говорит он, не дожидаясь вопроса. "Добавить мне нечего."`,

    guardia_exito: () => `Наступает момент, когда что-то в лице Бертона надламывается. Это не внезапный срыв — скорее похоже на то, как человек наконец опускает груз, который слишком долго нёс на себе.

"Ладно. Ладно." Он бросает взгляд на дверь в коридор, затем снова на вас. Голос понижается почти до шёпота. "Мне заплатили. Гном, ростом вот досюда." Он показывает рукой примерно на уровне бедра. "Нелепая шляпа, слишком большая для его головы. Дал мешок монет — этого хватило бы, чтобы не задавать вопросов, — и сказал, что через час всё уже будет позади." Он с трудом сглатывает. "Имени не знаю. Но раньше видел его в порту. Спросите про того, кого называют Эль Нохомо. Оттуда и тяните нить."

Он отворачивается к окну. Разговор окончен.`,

    guardia_fallo: () => `Бертон не сдвигается ни на дюйм. "Я всё уже сказал сегодня утром. Ничего не видел, ничего не слышал." Голос ровный, отрепетированный — голос человека, который повторял одну и ту же историю столько раз, что она превратилась в рефлекс.

Когда он поворачивается, давая понять, что разговор окончен, ваш взгляд невольно падает на его ноги. Новые сапоги. Тонкая, хорошо прошитая кожа — такое не купишь на жалование рядового стражника. Он носит их с явной неловкостью человека, не привыкшего к дорогой обуви.

Это не доказательство. Но кое-что это да значит.`,

    guardia_tension: () => `Бертон весь напрягается. В его глазах на миг мелькает расчёт — он взвешивает варианты, — а затем он открывает рот и кричит в коридор:

"Эй! Сюда! Мне нужна помощь!"

Шаги раздаются слишком быстро для случайности — значит, ждали где-то рядом. В комнату врываются два стражника, руки уже на рукоятях мечей. Судя по их лицам, мирить вас никто не собирается.`,

    guardia_combate_victoria: () => `Тишина, наступившая после, гнетущая и мгновенная. Двое стражников на полу, Бертон что-то кричит из глубины коридора — а вы уже на улице, движетесь сквозь толпу, опустив голову.

Руки слегка подрагивают. Не от страха — от адреналина, которому пока некуда деться. Вы не узнали от Бертона то, за чем пришли, но получили кое-что не менее ценное: этому человеку явно есть что скрывать, а двое стражников, которых он позвал на помощь, вовсе не горели желанием задавать вопросы. Коррупция забирается выше, чем подозревала Капитан.

Порт. Всё снова сводится к порту.`,

    mercado_rumores: (character) => {
      const racePart = {
        human: `Люди говорят с вами относительно свободно. Сквозь общий гул до вас долетают обрывки фраз: "говорят, тут дело в магии", "через такие замки без помощи изнутри не пройти", "в последнее время у порта видели странных типов."`,
        dwarf: `Люди говорят с вами относительно свободно. Сквозь общий гул до вас долетают обрывки фраз: "говорят, тут дело в магии", "через такие замки без помощи изнутри не пройти", "в последнее время у порта видели странных типов."`,
        elf: `Ваше присутствие держит людей на расстоянии, но пожилой травник принимает вас за своего в этой сдержанности. Он шепчет: "Те, кто это сделал, не отсюда. Маленькие и быстрые. Я видел, как они проходили две ночи назад, нагруженные мешками."`,
        halfling: `Поначалу вас никто не воспринимает всерьёз — и это оказывается на руку. Девочка без всякого стеснения показывает пальцем: "Странные человечки из порта — знаете таких? Собираются по ночам у воды и никогда никому не смотрят в глаза. Я их избегаю."`,
        dragonborn: `Люди расступаются, завидев вас. Но страх тоже развязывает языки: нервный торговец выбалтывает больше, чем хотел. "Я ничего не знаю! Только слышал, что новый посредник в порту — тот, которого называют Эль Нохомо, — начал работать всего неделю назад, а уже держит полдока в кулаке."`,
      };

      const roguePart = character.class === 'rogue'
        ? `\n\nСтарый знакомый из гильдии воров находит вас раньше, чем вы успеваете спросить сами. "Я тебе кое-чем обязан. Те, кто провернул дело с казной, — не из гильдии, вольные ребята. Называют себя Гномбандисты. Верховодит ими некий ДаБиЗ. Найдёшь их, если пойдёшь по знаку — что-то вроде спиральной буквы G, нацарапанной на стенах, — рядом с канализацией у порта."`
        : '';

      return `Рынок этим утром гудит от слухов. Люди перешёптываются кучками, торговцы понижают голос, стоит мимо пройти стражнику.\n\n${racePart[character.race]}${roguePart}`;
    },

    convergencia_puerto: (character, flags) => {
      let arrival = '';

      if (flags?.gnomo_sombrero_nohomo || flags?.knows_nohomo) {
        arrival = `Теперь у вас есть имя: Эль Нохомо. И, судя по всему, что удалось узнать, этот человек чувствует себя в порту как рыба в воде. Немного, но уже есть за что зацепиться. `;
      } else if (flags?.corrupcion_interna || flags?.guardia_sobornado) {
        arrival = `Бертон промолчал, но его новые сапоги сказали за него достаточно. Кто-то платит за то, чтобы определённые люди смотрели в другую сторону, а такие деньги откуда-то берутся. Всё указывает на порт. `;
      } else if (flags?.gnomabandistas_simbolo) {
        arrival = `В голове не выходит имя: Гномбандисты. А знак, который вам посоветовали искать, по словам вашего знакомого, должен быть где-то здесь, в порту. `;
      } else if (flags?.ladrones_pequenos || flags?.nohomo_puerto) {
        arrival = `Рыночные слухи были обрывочными, но все вели в одну сторону. Маленькие люди, снующие по ночам, новый посредник со слишком большим влиянием. Кто-то ведёт дела прямо с доков. `;
      } else if (flags?.ganzua_gnomica) {
        arrival = `Следы, найденные вами в казне, были совсем крохотными, а такую отмычку не сделает ни один мастер Валдриса из тех, кого вы знаете. Кто-то чужой, очень маленький и явно знающий своё ремесло. А такие обычно оказываются в порту. `;
      } else if (flags?.sensacion_ladron_pequeno) {
        arrival = `В казне вы не нашли ничего конкретного, но ощущение не отпускает: тот, кто это сделал, был маленьким, ловким и прекрасно знал это место. Городской вор так не сработал бы. Порт — логичный следующий шаг. `;
      } else {
        arrival = `Все нити сходятся здесь. Всё увиденное и услышанное этим утром ведёт в одну сторону. `;
      }

      return `${arrival}Запах соли и мокрого дерева встречает вас, стоит спуститься к докам. В этот час порт Валдриса — настоящий лабиринт продуманной суеты: рыбаки слишком поспешно сматывают сети, грузчики таскают тюки, ни на кого не глядя, в тавернах разговоры обрываются, стоит открыться двери. Именно здесь ходят деньги, не желающие оставлять следов, здесь чужаки проходят незамеченными. Если тут что-то и можно найти — оно между этих причалов.`;
    },

    puerto_sigilo: () => `Вы отделяетесь от потока на главной улице и проскальзываете между складами. Света мало — он с трудом пробивается сквозь постройки, будто выросшие одна поверх другой безо всякого плана. У третьего причала заметно необычное движение: тюки перемещаются без единого слова, фигуры двигаются слишком медленно для спешащих работников.

Вы замираете на месте. Наблюдаете.`,

    puerto_sigilo_exito: () => `Из своего укрытия вы наблюдаете за двумя фигурами в капюшонах — невысокими, ловкими, — они разгружают что-то с неприметной телеги прямо к канализационной решётке. Работают молча, слаженно, явно не в первый раз. Закончив, один из них на мгновение задерживается у стены ближайшего склада и делает короткий жест рукой, прежде чем скрыться под решёткой.

Когда путь свободен, вы подходите ближе. На стене, на уровне колена, среди сырости и грязи почти незаметная, нацарапана метка: спиральная буква G. Не случайный росчерк — знак, оставленный намеренно.`,

    puerto_combate: () => `Вы не успеваете толком осознать ситуацию, а она уже становится хуже. Здоровяк, почти целиком загородивший свет между двумя складами, оборачивается к вам с невозмутимостью человека, которому спешить некуда — он точно знает, чем это закончится.

"Ищешь что-то, чужак?" Вопрос риторический. За его спиной из теней возникают ещё двое. На них нет формы стражи. Зато на лицах — выражение людей, которым платят за то, чтобы проблемы исчезали.`,

    puerto_combate_victoria: () => `Последний из троих падает, и в переулок возвращается тишина. Что-то ноет там, где раньше боли не было, и адреналин постепенно сменяется той особой усталостью, что приходит только после настоящей драки.

Но прежде чем скрыться, один из нападавших роняет на землю клочок бумаги, испачканный маслом по краям. Вы разворачиваете его. Грубая карта порта, нарисованная от руки, с единственной пометкой: спиральная буква G, указывающая на точку в канализации. Тот, кто послал этих троих, явно знал, что вы будете задавать вопросы. Значит, вы на верном пути.`,

    puerto_capturado: () => `Удар обрушивается оттуда, откуда вы не ждали. Миг внезапной темноты — и ничего.

Когда сознание возвращается, вы лежите на полу склада, пропахшего протухшей солью и гнилым деревом. Руки связаны за спиной, в затылке пульсирует боль в такт сердцебиению. Помещение пусто. Что бы им ни было нужно — либо они уже это получили, либо решили, что игра не стоит свеч.

Освободиться удаётся не сразу. Когда вы наконец выбираетесь наружу, солнце успело сместиться на небе. Потеряны часы. И всё же, прислонившись к стене, чтобы перевести дух, вы видите именно то, что нужно: спиральную G, нацарапанную на камне и указывающую вниз. По крайней мере, этого у вас не отняли.`,

    puerto_preguntar: () => `У входа на третий причал стоит таверна — с виду именно то место, куда идут, когда хотят остаться незамеченными. Вы толкаете дверь. Гул разговоров на миг стихает, несколько пар глаз оборачиваются к вам — и тут же возвращаются к своим делам с деланым безразличием.

Вы облокачиваетесь на стойку и достаточно громко спрашиваете про Эль Нохомо, чтобы вас услышал тот, кому нужно.`,

    puerto_preguntar_exito: () => `Трактирщик уже долго протирает один и тот же стакан. Он не смотрит на вас прямо. Но и не уходит.

Когда он наконец отвечает, взгляда не поднимает. "Понятия не имею, о чём вы." Долгая пауза. Тряпка продолжает скользить по стеклу. "Но если бы я что-то искал в этом порту, я бы сначала взглянул на ту заднюю стену."

На камне у чёрного хода видна метка. Спиральная буква G. "Идите за такими же, куда бы они ни вели," — говорит трактирщик, уже отворачиваясь к другому концу стойки. "И моего имени не упоминайте."`,

    puerto_preguntar_fallo: () => `Бар не даёт вам ничего. Разговоры не смолкают совсем, но становятся тише, а ответы, которые вы получаете, колеблются от молчания до пожатия плечами, ясно говорящего: рассказывать вам никто ничего не собирается.

Уйти ни с чем — обычное дело в такой работе.

Но стоит вам переступить порог обратно на улицу, кто-то мимоходом задевает вашу руку. Опустив взгляд, вы обнаруживаете в ладони смятый клочок бумаги. На нём только небрежный рисунок: спиральная буква G. Ни подписи, ни объяснений. Кто-то внутри решил вам помочь, не показываясь при этом.`,

    puerto_picaro: () => `Такие места вы знаете куда лучше, чем хотелось бы признавать. Порт Валдриса не сильно отличается от любого другого: те же маршруты движения, те же знаки, если знать, куда смотреть, те же лица наблюдателей, старающихся не выглядеть наблюдателями.

За двадцать минут в голове складывается полная карта: точки наблюдения, переулки, ведущие туда, куда вас видеть не хотят, и одна и та же метка, повторяющаяся в трёх разных местах, — спиральная G, нацарапанная на камне, неприметная, как секрет, и очевидная, как путь для того, кто умеет смотреть. Канализация. Ну конечно.`,

    alcantarillas_entrada: () => `Решётка не заперта — само по себе это уже кое-что значит. Канализация Валдриса стара, и запах это подтверждает, но путь, по которому вы идёте, не выглядит заброшенным: в грязи на полу видны свежие следы, а спиральная метка через равные промежутки повторяется на стенах, нацарапанная на разной высоте — будто её оставляли люди разного роста.

Голоса доносятся раньше, чем становится виден хоть какой-то свет. Впереди кто-то спорит — с уверенностью человека, чувствующего себя на своей территории в полной безопасности.`,

    escondite_sigilo: (character) => `Вы двигаетесь вдоль стены, ступая туда, где нет воды, избегая мест, где камень под ногами звучит подозрительно иначе. С каждым шагом голоса становятся отчётливее.${character.isInjured ? '\n\nРана, полученная раньше, до сих пор даёт о себе знать. Любое резкое движение напоминает: вы далеко не в лучшей форме.' : ''}`,

    escondite_sigilo_exito: () => `Комната, в которую вы попадаете, на удивление просторна для подземелья — обустроена так, как обычно обустраивают место те, кто занял его просто потому, что больше на него никто не претендовал. Ящики, сложенные почти до потолка, карта Валдриса, расстеленная на столе и испещрённая незнакомыми пометками, свечи, горящие явно не первый час.

А в центре комнаты, громко споря, стоят трое: коренастый гном, увешанный шестерёнками и приспособлениями так, что хватило бы на целую лавку, тифлинг с короткими рогами и вечно недовольным выражением лица, и гном в потрёпанной рясе, что-то тихо бормочущий себе под нос между репликами остальных — будто ведёт параллельный разговор с кем-то невидимым для окружающих. Остальных членов банды нигде не видно.`,

    escondite_escuchar: () => `Вы замираете и слушаете.

Гном с шестерёнками возмущённо жестикулирует, рискуя с каждым движением уронить половину своих приспособлений на пол. "Говорю же вам, надо было прихватить и канделябры! Чистое серебро, я сам видел—"

"Молибден." Голос тифлинга холоден, как железо в разгар зимы. "Заткнись."

"Господин ДаБиЗ вот-вот вернётся," — произносит тот, что в рясе, не отрываясь от чтения. "Имей веру, Текнесио. А ты, Молибден, прекрати вести опись того, что мы не забрали."

Молибден. Текнесио. И тот, что в рясе, — судя по всему, Геномо, если сложить услышанное воедино. Трое из группы, и четвёртый на подходе. ДаБиЗ. Они кого-то ждут.`,

    escondite_combate_gnomos: () => `Никакого способа сделать это чисто нет, так что вы и не пытаетесь. Либо входите сами, либо вас обнаруживают — результат один: мгновенный хаос.

Молибден хватает первое, что попадается под руку, — оказывается, устройство, которое взрывается совсем не в ту сторону, заполняя комнату дымом и запахом палёной серы. Текнесио вскидывает руку, воздух трещит, и разряд молнии проносится в сантиметре от вашего уха, оставляя чёрный подпал на стене за спиной. Геномо закрывает глаза, складывает руки и начинает бормотать нечто, отдалённо напоминающее благословение, — но, судя по результату, работает оно не очень.`,

    escondite_capitan: () => `Капитан Альдара не тратит время на пафос. Она прибывает с шестью явно тщательно отобранными стражниками, без единого лишнего слова расставляет их по местам и наконец смотрит на вас. "Хорошо, что предупредили. Теперь входим вместе, и всё делаем по порядку."

Идея сделать всё по порядку живёт ровно до того момента, как Молибден видит факелы и впадает в панику, Текнесио решает, что заклинание всегда надёжнее капитуляции, а Геномо начинает молиться вслух с таким рвением, что в других обстоятельствах это могло бы даже впечатлить. Комнате требуется несколько сумбурных минут, чтобы успокоиться, но результат оказывается именно таким, как и ожидалось.`,

    escondite_directo: () => `Иногда самое прямое решение оказывается и самым честным. Вы находите то, что здесь заменяет дверь, делаете шаг назад — и врываетесь внутрь.

Троим внутри требуется ровно секунда, чтобы осознать происходящее. Вы этой секундой пользуетесь.`,

    libro_cuentas: () => `Пока трое увлечены спором, ваши руки действуют сами по себе. Методично, ящик за ящиком, вы приподнимаете уголки, проверяете днища — ищете тайник того рода, что устраивает лишь тот, кто не до конца доверяет собственным сообщникам.

Под расшатанной доской пола, завёрнутая в вощёную ткань для защиты от сырости, обнаруживается тетрадь в зелёном кожаном переплёте. Вы открываете её. Имена, даты, суммы. Аккуратные столбцы, выведенные мелким, точным почерком. Некоторые имена вам знакомы: чиновники дворца, судья, трое торговцев с постоянными местами на центральном рынке. А в конце последней страницы, подчёркнутое дважды, — имя человека, имеющего прямой доступ к монарху.

Это не запись об одном ограблении. Это архив операции, которую кто-то годами выстраивал, замышляя нечто гораздо большее.`,

    encuentro_dabiz: (character, flags) => {
      const knowsName = flags?.knows_dabiz_name || flags?.knows_nohomo;
      const hasLedger = flags?.has_ledger;

      const intro = `Вы слышите его раньше, чем видите. Спокойный, почти скучающий голос. "Я знал, что рано или поздно ты найдёшь дорогу сюда."

Из теней выходит гном, совершенно не похожий на тех, кого вы встречали раньше. Широкоплечий, с телосложением, невозможно крепким для его роста, с бычьей шеей и кулаками человека, который выиграл множество схваток и наслаждался каждой из них. Через всю левую скулу тянется тёмная татуировка в племенном стиле, придающая ему вид одновременно свирепый и почти аристократичный. Рядом с ним — гномка с хищным взглядом и двумя кинжалами на поясе, уже сжатыми в руках.`;

      const greeting = knowsName
        ? `\n\n"ДаБиЗ Эль-Нохомо собственной персоной. Ниже ростом, чем я ожидал."`
        : `\n\nГном улыбается, заметив ваше замешательство. "Ищешь Эль Нохомо? Что ж, ты его нашёл."`;

      const ledgerLine = hasLedger
        ? `\n\n"Вижу, ты нашёл мою бухгалтерию. Как некстати." Улыбка не сходит с его лица. "Это меняет дело."`
        : '';

      return `${intro}${greeting}${ledgerLine}\n\n"Знаешь, сколько народу пытались меня остановить?" Улыбка не исчезает. "Любопытно, что ты зашёл так далеко."`;
    },

    encuentro_dabiz_capitan: () => `Капитан Альдара входит следом за вами, и в глазах ДаБиЗа мгновенно и безошибочно читается расчёт. Он окидывает взглядом подкрепление, прикидывает пути отхода, бросает короткий взгляд на спутницу. Та едва заметно качает головой.

"Любопытно." ДаБиЗ двумя пальцами поправляет край шляпы — жест, больше похожий на вежливость, чем на нервозность. "Признаю, такого хода — предупредить стражу — я не ожидал." Пауза. "И всё же просто так я не сдамся."`,

    combate_final: () => `Его спутница движется первой — с быстротой, не вяжущейся с её ростом. Кинжалы возникают в её руках так, будто были там всегда, и расстояние между вами исчезает быстрее, чем вы успеваете это осознать.

В дальнем конце зала ДаБиЗ начинает бормотать. Слова звучат на незнакомом вам языке, но эффект заметен сразу: воздух вокруг него будто густеет, а племенная татуировка на левой скуле слабо вспыхивает с каждым слогом. Ждать, чем это обернётся, времени нет.`,

    camino_acusacion: () => `Вы не успеваете толком прийти в себя, а всё уже становится хуже.

Городская стража появляется в полном составе, и не одна: среди стражников — тот самый коррумпированный служака, с позой человека, принявшего решение и не намеренного отступать. Он вскидывает руку и указывает на вас пальцем, который дрожит недостаточно сильно, чтобы выглядеть невиновным.

"Вот он. Я видел, как этот выходил из казны прошлой ночью." Голос твёрд, отрепетирован, безупречен — голос человека, часами готовившего этот самый момент. "Вор — он."

Беда быть чужаком в незнакомом городе в том, что никто не может с уверенностью сказать, что это неправда.`,

    persecucion: () => `Через несколько минут ваше имя у всех на устах — у всех, кому выгодно, чтобы виновным оказался кто угодно, только не они. Продажные стражники поработали на славу: вы чужак, за вас некому поручиться, а придуманная ими история достаточно убедительна, чтобы продержаться нужное им время.

Улицы смыкаются вокруг вас. За любым углом может кто-то поджидать. Выбираться нужно немедленно.`,

    final_bueno: () => `В тот день площадь Валдриса выглядела иначе, чем обычно. ДаБиЗ Эль-Нохомо в кандалах, его нелепая шляпа конфискована, а на лице — выражение, которое сложно назвать поражением: скорее похоже, что он мысленно перебирает, что пошло не так, чтобы не повторить эту ошибку впредь. Йероми рядом с ним, взгляд устремлён вперёд, ни единой видимой эмоции. Сокровище монарха возвращено и пересчитано до последней монеты.

Капитан Альдара обратилась к собравшейся страже и произнесла ваше имя с той же точностью, с какой делает всё остальное. Речь была недолгой — Альдара вообще не любит длинных речей. Но этого хватило.

Когда их уводили, ДаБиЗ обернулся и взглянул на вас в последний раз. Выражение его лица оказалось совсем не тем, что вы ожидали: ни ярости, ни унижения. Что-то, опасно похожее на уважение к достойному противнику. "До следующей встречи, чужак," — произнёс он тихо, так, чтобы услышали только вы. И что-то в его голосе подсказало: это не пустая угроза.`,

    final_neutral: () => `Сокровище вернулось в казну монарха, и, по мнению капитана Альдары, это главное — с практической точки зрения она права. И всё же есть что-то, что не даёт покоя в том, как всё завершилось.

В последний момент, когда периметр уже был перекрыт и видимых путей отступления не оставалось, ДаБиЗ и Йероми всё же нашли выход. Проход, которого никто из вас не заметил, — узкий, идеально просчитанный. Они растворились в канализации Валдриса, будто вода поглотила их без следа.

Альдара молча подписала оговорённую плату. "Вы сделали, что я просила," — и больше ничего. Ваше имя не появится ни в одном официальном отчёте. Но в подземном мире города уже начинает гулять история о чужаке, который подошёл совсем близко. У историй о тех, кому почти удалось, тоже есть своя цена, даже если признавать это неприятно.`,

    final_malo_1: () => `ДаБиЗ не повышает голоса. Он просто поднимает руку.

Воздух вокруг вас густеет — так, будто в нём вдруг стало слишком много веса, — и колени сами подгибаются, опуская вас на землю. "Ты неплохой человек," — говорит ДаБиЗ, глядя на вас сверху вниз с чем-то похожим на искреннее сожаление. "Зашёл довольно далеко, честно говоря. Может, в другой раз повезёт больше."

Когда вы наконец снова можете двигаться, логово уже пусто. Прибрано почти начисто. Будто здесь никогда ничего и не было.

Капитан Альдара выслушивает вас до конца, не перебивая. Потом долго смотрит в окно. "Отдохните," — это всё, что она говорит. Плата, которую она передаёт из рук в руки, меньше оговорённой, и вы оба понимаете почему. О провале вслух никто не говорит. Но в Валдрисе молчание тоже умеет говорить.`,

    final_malo_2_escape: () => `Вам удалось выбраться. Именно это вы твердите себе, пока стены Валдриса уменьшаются позади, а дорога под ногами становится единственным вашим планом.

На доске объявлений у северных ворот, пробегая мимо, вы успеваете прочитать собственное описание. Тот, кто это писал, знал о вас на удивление много: детали точны, награда достаточно щедра, чтобы заинтересовать многих, а обвинение достаточно конкретно, чтобы его было трудно опровергнуть без доказательств, которых у вас больше нет.

Валдрис остаётся позади. Настоящий виновник по-прежнему в его стенах — вероятно, уже готовит следующее дело. А вы на дороге, без гроша, но с уверенностью, что знаете, чем закончилась бы эта история, даже если рассказать её теперь некому.`,

    final_malo_2_arrestado: () => `Прутья решётки старые, ржавые на стыках — это первое, на что вы обращаете внимание, потому что мозгу проще зацепиться за деталь, чем осмыслить происходящее целиком.

Вашу историю никто не слушает. Не потому, что рассказать нечего: она есть, целая, логичная, с деталями, которые мог бы проверить любой толковый следователь. Беда в том, что у толковых следователей есть все причины не проверять её. Свидетели, способные подтвердить ваши слова, состоят на жаловании не у тех людей. А вы чужак — а значит, в Валдрисе вы никто, пока кто-то не решит, кем вам быть.

Настоящий виновник так и не найден. Сокровище так и не возвращено. А у вас остаётся сколько угодно времени, чтобы снова и снова прокручивать тот момент, когда всё пошло не так, — и гадать, могли ли вы поступить иначе.`,

    final_malo_2_muerte: () => `Их слишком много. Это последнее, что вы успеваете ясно осознать, прежде чем счёт перестаёт иметь значение, а исход перестаёт вызывать сомнения.

Последняя мысль, мелькнувшая в голове, отдаёт горькой иронией: вы пришли в Валдрис раскрыть преступление, а закончите жертвой другого. Настоящий виновник по-прежнему на свободе. Сокровище по-прежнему потеряно. А город завтра будет жить как ни в чём не бывало — города всегда так делают.`,

    final_secreto: () => `Капитану Альдаре требуется больше времени, чем обычно, чтобы отреагировать, когда вы кладёте на её стол тетрадь в зелёном кожаном переплёте. Она читает медленно, осторожно переворачивая страницы, и тишина в комнате словно меняет плотность с каждой минутой.

Когда она наконец поднимает взгляд, перед вами человек, только что узнавший нечто, коренным образом меняющее его понимание места, которому он служил долгие годы. "Это уходит гораздо выше, чем я предполагала," — произносит она, и в её голосе звучит нечто, чего вы раньше не слышали: не совсем страх, но что-то очень близкое к нему.

ДаБиЗ сдаётся без сопротивления. Он понимает: тетрадь в руках Капитана обвиняет его сильнее любого боя, а сопротивляться сейчас не изменит уже решённого. Один за другим, в последующие дни и недели, имена из списка получают последствия. Кто-то падает быстро. Кому-то удаётся скрыться на время.

Ваше имя не появляется ни в одном официальном докладе — это слишком опасно. Но мешок, который Альдара вкладывает вам в руки, весит заметно больше договорённого, а прощальная фраза звучит предельно ясно: "Вас здесь не было."

Вы выходите на улицы Валдриса — тот же город, что и прежде, и всё же вы теперь знаете, что не совсем тот. И, пожалуй, этого достаточно.`,

    choices: {
      reunion_capitana: [
        '"Начну с казны."',
        '"Хочу поговорить с дежурным стражником."',
        '"Сначала послушаю, что говорят на рынке."',
      ],
      convergencia_puerto: [
        '"Двигаюсь тихо и наблюдаю."',
        '"Открыто спрашиваю про Эль Нохомо."',
        '"Я знаю, как устроен этот мир. Знаю, где искать."',
        '"Расспрашиваю о подозрительной активности в порту."',
      ],
      alcantarillas_entrada: [
        '"Иду вперёд тихо."',
        '"Возвращаюсь предупредить Капитана."',
        '"Вхожу напрямую."',
      ],
      escondite_sigilo_exito: [
        '"Слушаю, о чём они говорят, прежде чем действовать."',
        '"Бросаюсь на них внезапно."',
        '"Пользуюсь случаем обыскать комнату, пока меня не заметили."',
      ],
      encuentro_dabiz: [
        '"Сдавайся. У Капитана уже есть все доказательства."',
        '"Здесь всё и закончится."',
      ],
    },
  },
};