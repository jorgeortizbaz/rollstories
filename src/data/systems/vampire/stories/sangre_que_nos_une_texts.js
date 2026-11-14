export const SANGRE_TEXTS = {

  en: {

    inicio: () => `Eclipse sounds different on Thursdays. You've been coming for months, always the same table near the bar, always the same feeling that this place has a second floor nobody's ever shown you. Nobody's told you outright, but somehow you know that inside these walls the normal rules don't quite apply.

Tonight someone sits down next to you without you seeing them approach. That alone should have put you on alert. It doesn't.

"You've been coming long enough," says a voice you don't quite recognize, "for us to start trusting you." A hand rests on yours, cold in a way that has nothing to do with the air conditioning. "Come with me. There's something I want to show you."`,

    el_abrazo: () => `Eclipse's back room shouldn't be this big. The dance floor lights don't reach here; only a candle remains, and a figure you can't quite make out, as if your eyes refuse to focus on it.

"This is going to hurt," the voice says, with an honesty you almost appreciate. "Just once. Never again after this."

There's no time to answer. There's a pain unlike anything you've ever felt, a cold that starts in your chest and spreads outward, and then, silence. When you open your eyes again, the world has a different color. Not literally, or maybe it is. Everything looks sharper, closer, hungrier.`,

    despertar: (character) => {
      const reactions = {
        brujah: `The first thing you feel is rage. It doesn't have a clear target yet, just pure, unfiltered fury climbing from your stomach to your clenched fists. You want to break something, to scream, to hit the wall just to feel your new body respond. Staying still takes real effort.`,
        toreador: `The first thing you notice is the brutal beauty of everything around you. The candle's flame, the grain of the wooden wall, even the dust suspended in the air have an almost painful sharpness. You could stare at the candle forever. Part of you knows that's dangerous too.`,
        ventrue: `The first thing you do, even before finishing processing what happened, is assess the room: exits, who else is here, what control you have over the situation. The instinct to command arrives almost before the fear does. You get up with a calm you didn't know you could fake so well.`,
        nosferatu: `The first thing you feel is the change in your own body, something that doesn't fit, as if your skin no longer fully belongs to you. You bring your hands to your face by instinct, looking for something to confirm or deny. There's no mirror nearby. You're almost grateful.`,
        malkavian: `The first thing you hear is laughter. It's yours, and you're not quite sure why you're laughing, or at what, or whether you should stop. Behind the laughter there's something else: a strange clarity, as if you were suddenly seeing things from an angle no one else has considered. You don't know yet if that's a gift or the start of a crack.`,
      };
      return `${reactions[character.race]}

In front of you, the figure that brought you here is gone. In its place, a woman with a calm expression watches you with the patience of someone who's seen this exact scene dozens of times before. "Welcome," she says, without any particular warmth, but no hostility either. "I'm Selene. And right now, you and I need to talk about a problem."`;
    },

    selene_explica: () => `Selene sits across from you with the calm of someone who's had this conversation before, though never with you. "I know you have questions. Most will get answered in time. Right now I just need you to understand two things."

She raises a finger. "First: this wasn't a gift. It was a decision made by someone with their own reasons, and now you're part of something you didn't fully choose. That's not fair, but it's the reality."

She raises a second finger. "Second, and this is the one that actually matters tonight: over the past few weeks, several of our kind have disappeared. No fight, no noise, no trace. One day they're here, and the next, nothing. No body, no explanation, no witnesses."

Her expression hardens slightly. "The Prince can't afford to let this continue, but he also can't investigate it openly without causing panic. He needs someone no one recognizes, someone without a history or loyalties formed yet." She looks at you directly. "Someone exactly like you, newly arrived this very night."`,

    primera_sed: (character) => {
      const scenes = {
        bagger: `Selene takes you to the back of a hospital, where a service door is conveniently unwatched at this hour. "The first time is the hardest," she says, pointing to a fridge marked with a red cross. "After this, you'll find your own way."

Your hands move almost on their own, as if your body remembers a procedure your mind never learned. The blood bag doesn't taste like much, cold and clinical, but the relief you feel at the first pull is so intense it surprises you into losing your breath, even though you no longer need it.`,
        osteopath: `Selene gets you, without explaining quite how, a white coat and a lanyard with an ID badge that shouldn't survive even the most superficial scrutiny. And yet it works: the receptionist at the private health clinic barely glances at you before waving you through.

The patient you attend to believes you're drawing blood for a routine test. He chats with you about his weekend while the tube fills, suspecting nothing, and you feel a pang of something that could be guilt if you let yourself feel it fully. You don't. Not yet.`,
        siren: `Selene leaves you on Eclipse's dance floor with a single instruction: "Choose someone who wants to be chosen." It doesn't take much effort. A stranger whose gaze had already been searching for yours for a while approaches before you have to do anything.

The dancing turns into something else within minutes, a closeness he actively seeks and you barely have to fake. The bite, when it comes, feels almost like a natural part of the rhythm. He won't even remember it clearly tomorrow. You will.`,
        sandman: `Selene guides you to an apartment building and, without it being entirely clear how you got in, you find yourselves inside a stranger's bedroom, where someone sleeps deeply. "Carefully," she whispers. "Don't wake them. You don't need to."

You approach and discover, almost by instinct, how to do it: the person's sleep deepens at your touch, and she doesn't stir while you feed. When you finish, there's no visible mark, no memory she'll form. Just a particularly vivid dream she'll forget upon waking.`,
      };
      return scenes[character.class];
    },

    transicion_investigacion: () => `When you return to Eclipse, Selene is already waiting for you with two drinks that contain no alcohol for either of you. "Better?" she asks, not really expecting an answer. "Now that you won't be distracted thinking about food, let's talk about where you can start pulling the thread."

She sums up what's known, which isn't much: the last Cainite to disappear was named Marcus, and no one has seen him in four nights. No body. No signs of struggle. Just an absence that's starting to weigh on the whole city.`,

    convergencia_investigacion: () => `You have a name, a date, and practically nothing else. The city is big and the night is young, but not endless. You need to decide where to start pulling the thread.`,

    investigar_cainitas: () => `There's a bar that doesn't show up on any tourist map, hidden behind a door with no sign, where the city's Cainites go when they want to talk without mortals listening. You find someone who knew Marcus: nervous, evasive, with the look of someone who knows more than they're willing to admit out loud.`,

    investigar_exceptional: () => `You know exactly which words to use, which silences to leave, when to press and when to back off. In the end, your source breaks down completely, with the look of someone who's wanted to tell this to someone for weeks.

"Marcus was investigating something on his own. Something about an Elder who was supposed to be dead, or lost, or who knows. He said a word I'd never heard: Diablerie. He wouldn't explain what it meant. He just said that if he was right, this was going to be much worse than the Prince thinks." He swallows, even though he doesn't need to. "That was the last time I talked to him."`,

    investigar_exito: () => `You get them talking, though reluctantly. "Marcus had been acting strange for a while. Asking about the city's Elders, about who'd been out of society for a long time." Their voice drops. "The last time I saw him, he said he'd found something in a warehouse on the outskirts. Didn't tell me more."`,

    investigar_parcial: () => `You get something, but only half of it: your source clams up the moment they notice you're pushing too hard. "I don't know anything," they repeat, though their expression says otherwise. Before they walk away completely, you catch them muttering under their breath: "Warehouse... outskirts..." You've lost more time than you expected, and now the whole bar is looking at you with more curiosity than you'd like.`,

    investigar_fallo: () => `You pick the wrong words, or the wrong moment, or both. Your source stands up abruptly. "I don't know who sent you, but stop asking questions." They vanish into the crowd before you can course-correct. The entire bar seems to have noticed you for an uncomfortably long moment.`,

    registrar_escena: () => `Marcus's apartment is still sealed from the inside with the discretion of someone who doesn't want mortals finding out anything. No one's touched it since he disappeared. If there's anything to find, it's still here.`,

    registrar_exceptional: () => `You don't leave a single corner unchecked. Under a loose floorboard you find a notebook, carefully hidden. Inside, Marcus's handwriting, growing more anxious as the pages go on, documents nights spent watching a man who, according to his own notes, "doesn't age, is never seen twice in the same place, and leaves behind Cainites who simply cease to exist." The last entry, underlined hard enough to tear the paper, reads only: "Diablerie. It has to be that. I'm going to confirm it tonight."

There are no entries after that one.`,

    registrar_exito: () => `You find signs Marcus left in a hurry: an open drawer, papers disturbed. Among them, a city map with an area marked in red near the industrial port. There's no written explanation for why that spot interested him, but the mark is recent.`,

    registrar_parcial: () => `You search the apartment without much order, and although you find nothing conclusive, there's a clear sense that someone else was here before you, searching with more care than Marcus would have allowed in life. Whoever it was, they took something. The question is what.`,

    registrar_fallo: () => `You spend more time than you should without finding anything useful, and the noise of your own movements echoes too loudly in a building that's supposed to be empty. When you finally give up, you have the uncomfortable feeling of having left more of a trace than you collected.`,

    contactos_mortales: (character) => {
      const clanFlavor = {
        brujah: `You don't bother hiding the urgency. Your contact, a bouncer at a nearby club who owes you more than one favor, notices your tension but decides not to ask why.`,
        toreador: `You choose your contact carefully: someone from the local art scene, delighted to chat with you about anything, including rumors he doesn't even realize he's sharing with someone he shouldn't.`,
        ventrue: `You approach someone with access to information most people wouldn't have: a city official who treats you with the automatic respect of someone who's learned not to ask questions.`,
        nosferatu: `You'd rather not be fully seen. You speak from the shadows of an alley to someone who can't even make out your face clearly, and yet trusts your voice more than they should.`,
        malkavian: `Your contact looks at you with a mix of fondness and caution you already know well: they consider you strange but harmless, which, tonight, works in your favor.`,
      };
      return `${clanFlavor[character.race]}

You ask, careful not to sound like what you are, whether anyone's seen anything strange in the past few weeks: disappearances, people who stopped showing up without explanation, rumors of something that doesn't add up.`;
    },

    contactos_exceptional: () => `Your contact perks up more than expected. "Now that you mention it, yes. There's a warehouse in the industrial district that had been closed for years and suddenly has activity at night. No one goes in or out through the main door, but there are lights. And last month a security guard from the area disappeared. Police filed it as him leaving without notice, but nobody who knew him believed that."`,

    contactos_exito: () => `Your contact thinks for a moment before answering. "There are always rumors. But yes, someone mentioned strange movement near the port recently, in one of the abandoned warehouses. Nothing they'd swear to, but enough that people avoid that street at night."`,

    contactos_parcial: () => `Your contact doesn't have much to offer, but as they say goodbye they add, almost as an afterthought: "Oh, by the way, my neighbor says she heard screaming a few nights ago, near the industrial district. She figured it was cats." They don't sound very convinced of their own theory.`,

    contactos_fallo: () => `The conversation doesn't lead anywhere useful. Your contact is more interested in talking about their own life than giving you information, and steering them back on topic proves harder than you expected. You leave with the feeling of having wasted an entire night for almost nothing.`,

    el_patron: (character, flags) => {
      const diablerieLine = flags?.knows_diablerie_word
        ? ` When you say the word "Diablerie" out loud, something shifts in Selene's expression. Not surprise exactly. More like the confirmation of a fear she'd been carrying in silence for a while, without naming it.`
        : '';

      return `You return to Eclipse with your hands full of fragments that, on their own, don't say much. Selene listens to every detail without interrupting, with the focus of someone building a mental map you still can't fully see.${diablerieLine}

When you finish, she stays silent for a beat too long to be comfortable. "There's a pattern," she finally says. "It all points to the same area: the industrial district, near the port. A warehouse that had been closed for years and, apparently, has activity again." She presses her lips together, as if the next sentence costs her more than it looks. "It's time to go see what's in there."`;
    },

    convergencia_almacen: () => `The warehouse rises at the end of a poorly lit street, its windows boarded up from the inside and a padlock on the main door that seems more decorative than functional. No guards visible from outside, which, in your still very recent experience as a Cainite, is never a good sign.

You need to decide how to get in.`,

    almacen_sigilo: () => `You circle the building looking for an entrance other than the main door. You find a poorly sealed window in the back, wide enough to slip through if you move carefully and don't mind getting a little dirty along the way.`,

    sigilo_exceptional: () => `You move as if you'd been doing this your entire existence, not just a few nights. Not a single board creaks, not a single shadow shifts too much. You're inside before your own body finishes processing the movement, and no one in the building has the slightest idea they're no longer alone.`,

    sigilo_exito: () => `You manage to slip in without anyone hearing you, though the heart that no longer beats insists on racing out of habit. You're in. That's what matters.`,

    sigilo_parcial: () => `You get in, but not without noise: a metal object hits the floor with a dull thud that echoes more than you'd like in such a silent building. You freeze for a moment that feels eternal. No one comes to check. Still, you know you've burned part of your margin before you've even started.`,

    sigilo_detectado: () => `You almost make it. Almost. One creak too many, a movement at the wrong angle, and from the shadows inside emerges a figure that clearly wasn't expecting company, but doesn't seem entirely surprised someone tried either. Whoever works for whoever controls this place has no intention of letting you pass without a fight.`,

    almacen_combate_forzado: () => `There's no time for elegance. Your body, still learning what it's now capable of, responds with a strength that surprises even you.`,

    almacen_fuerza: () => `You don't bother looking for detours. The main door gives way with a single blow, the padlock breaking apart on the floor. The noise echoes through the whole building, and it doesn't take long for someone to show up ready to make you pay for such an indiscreet entrance.`,

    avisar_principe: (character) => {
      const clanReactions = {
        brujah: `You hate having to ask for permission for anything, and your clenched jaw shows it while Selene makes the call. But even you recognize that walking in alone against something that's already swallowed several experienced Cainites isn't bravery. It's just not making it to next week.`,
        toreador: `You take it with the same practical elegance you approach almost everything with: asking for backup isn't weakness, it's simply knowing how to play your cards well. Selene seems to silently approve of your common sense.`,
        ventrue: `This, you think, is exactly how things should be done. Chain of command, coordinated resources, no unnecessary moves. For the first time since you woke up turned, something feels familiar.`,
        nosferatu: `The idea of putting yourself under the Prince's guard's spotlight, even briefly, makes you more uncomfortable than expected. You'd much rather stay in the shadows. But the alternative is worse, so you agree.`,
        malkavian: `You laugh, a sound you don't fully understand yourself, and say yes before Selene even finishes proposing it. Some part of your mind already knew this was going to happen this way.`,
      };

      return `${clanReactions[character.race]}

Selene makes a brief call, and in less time than you expected, three figures with professional and utterly unreassuring expressions join you. "The Prince trusts this will be resolved," one of them says, without further introduction. "It doesn't need to be quiet. Just resolved."`;
    },

    almacen_refuerzos: () => `With backup at your side, the main door stops being an obstacle and becomes a mere formality. Whoever works inside stands no real chance against such a determined group, though that doesn't stop them from trying anyway.`,

    interior_almacen: (character, flags) => {
      const principeLine = flags?.principe_informado
        ? ` The Prince's reinforcements search the rest of the building with a cold efficiency that's almost more unsettling than what you find.`
        : '';

      return `The inside of the warehouse looks nothing like what you expected, even after everything you've seen these past few nights. Chains anchored to the walls, dark stains on the concrete floor no one has bothered to clean, and a smell your new nature recognizes before your mind finishes processing it: Cainite blood, not mortal. A subtle difference, but unmistakable once you know it.${principeLine}

And then, among the shadows in the deepest part of the warehouse, something moves. Something alive. Or, to be more precise in your new vocabulary, something undead.`;
    },

    testigo_encuentro: () => `What moves in the shadows isn't a threat, at least not in the sense you expected. It's a Cainite, or what's left of one: chained to the wall, with wounds that won't quite close and a look that jumps between terror and something like relief at seeing you arrive.

"Are you... are you with him?" he asks, in a voice that trembles more than a vampire should be able to. "No. No, of course not. No one comes for me. No one ever comes for the ones he leaves alive." He laughs, a broken sound with nothing funny about it. "Yeah, he leaves some alive. It's worse than killing them, if you think about it."

He clearly knows something. The question is how to get him to talk without fear shutting him down completely.`,

    convergencia_testigo: () => `You need to decide how to approach him. He's scared, fractured, and any wrong move could make him close off completely or, worse, panic.`,

    testigo_calma: () => `You approach slowly, hands visible, using the lowest voice you can manage. You're not his enemy, and you need that to be clear before you can ask him anything.`,

    testigo_calma_exceptional: () => `Something in the way you speak to him, or maybe just the fact that someone finally bothered to try, makes him break down completely. He tells you everything: where he was taken, what the place looked like, even a detail he lets slip almost without realizing its importance. "He has a weakness," he whispers. "When... when he does what he does, when he feeds like that, he's vulnerable for a while after. No one else will tell you this because no one else has seen it and survived to tell it."`,

    testigo_calma_exito: () => `Little by little, with long pauses and sentences that start several times before finishing, he gives you what you need: the exact location where he's being held, deep inside an abandoned building not far from here. "Be careful," he adds, as if it needed saying.`,

    testigo_calma_parcial: () => `You get him talking, but fear breaks his sentences into pieces that are hard to put together. "Near the river," he repeats several times, "near the river, in something that used to be... something, I don't remember, I don't remember anything else." It's not much, but it's a starting point.`,

    testigo_calma_fallo: () => `Something about your approach, however gentle the intention, makes him retreat to the limit of his chains. He shuts down, muttering something under his breath you can't make out, and no matter how you try, you can't get him to open his mouth again tonight.`,

    testigo_presion: () => `You have neither the time nor the patience for delicacy. You approach with the clear intention of making him understand that answering is the easiest option he has tonight.`,

    testigo_presion_exito: () => `It works, though you don't feel particularly proud of it. He talks fast, stumbling over his words, giving you the location of the hideout without barely breathing between sentences, as if he wants this conversation over as soon as possible. You get what you needed. The cost, if there is one, you pay later.`,

    testigo_presion_parcial: () => `He gives you something, between stammers and cut-off sentences, but fear clouds the details more than you'd like. "Near the water... an old place..." Not as precise as you hoped, but more than you had before walking in.`,

    testigo_presion_ataque: () => `Panic wins before you do. With a desperate, surprisingly fast movement for someone in his state, he breaks free from one of the chains and lunges at you, not exactly to attack, but simply to flee from whatever he thinks you're about to do to him. You have to restrain him before he hurts himself further.`,

    testigo_mente_rota: (character) => {
      const isSandman = character.class === 'sandman';
      const flavor = isSandman
        ? `You don't need him to talk. You barely brush against his mind and you're already inside, slipping between fragments of his memories with the same ease you use to slip into your victims' dreams. No barrier resists you when sleep and terror look so much alike.`
        : `You don't need him to talk. Your own mind, just as unreliable as his on its worst nights, finds something like a common language with his madness. You see what he saw, fragmented, out of order, but real.`;

      return `${flavor}

A different warehouse than this one, further north, by the water. A figure moving through the shadows with a certainty that admits no doubt. And, just before the memory shatters into useless pieces, a moment of vulnerability: the exact instant, after feeding, when not even Aurelio Nembrini is safe from a good hit.

You come out of his mind with more than any conversation would ever have given you.`;
    },

    hacia_la_guarida: () => `You leave the witness with the promise, perhaps an empty one, that someone will come to help him once this is over. Selene, who's been waiting outside this whole time, listens to what you've learned with the expression of someone who'd rather not take the next step, but knows there's no other option.

"So now we know where he is," she finally says. "What we don't know is whether you'll walk out of there in one piece."`,

    llegada_guarida: (character, flags) => {
      const debilidadLine = flags?.debilidad_nembrini
        ? ` And there's something else, something you keep to yourself as you approach: you know there's a moment, after he feeds, when even he isn't safe.`
        : '';

      return `The building the witness's information leads you to is bigger than you expected, and much quieter. No guards at the entrance, no obvious traps, nothing to suggest whoever lives here needs to protect themselves the way most of you would.${debilidadLine}

Selene stays behind, in the shadow of the entrance. "This isn't something I can help you with anymore," she says, with an honesty you didn't expect from her. "Whatever happens in there, it's your call."`;
    },

    nembrini_encuentro: () => `You find him in what was once a meeting room, sitting with the calm of someone who's been waiting all night, maybe all week, for someone to arrive. He doesn't seem surprised to see you. He doesn't, in fact, seem surprised by anything.

"I knew someone would come sooner or later," he says, without standing. "I didn't expect you to be so young." He gestures toward the empty seat across from him, an invitation with no obligation attached. "We can do this the hard way. Or you can sit for five minutes and hear why I do what I do, before deciding what you want to do about it."`,

    nembrini_escucha_firme: () => `You sit, but you keep a clear distance from the first second. He notices, and smiles as if the reaction strikes him as almost endearing.

"The Elders of this city have spent centuries treating young ones like you as spare parts," he says, without raising his voice. "Marcus, the others who 'disappeared'... trust me, none of them were innocent in the great game we all play here. They were, in a way, more useful dead than they ever were alive." He leans forward slightly. "I simply decided to stop waiting for someone else to fix it."

You listen to every word. And when he finishes, you're exactly where you were before sitting down: convinced that what he does is wrong, no matter how many justifications he stacks on top of it.

"I see," he says, reading your expression without difficulty. He stands slowly. "Then there isn't much more to say."`,

    nembrini_escucha_abierto: (character) => {
      const clanReactions = {
        brujah: `Something in his speech about the Elders treating the young as disposable strikes a nerve that was already raw before tonight, from the very moment you were turned without being asked.`,
        toreador: `There's something almost beautiful in the brutal clarity with which he describes the system that led him here. It's not that you fully agree. It's that, for the first time, someone is speaking to you with complete honesty about how this world actually works.`,
        ventrue: `As someone used to thinking in terms of power structures, you can't help but recognize the cold logic behind his words, even if the method he's chosen to enforce it strikes you as, at the very least, extreme.`,
        nosferatu: `You know better than most what it's like for a system to decide you're not worth caring about. That doesn't mean you approve of what he does. But it means that, for a moment, you truly understand it.`,
        malkavian: `Some part of your mind, the part that always sees the angles no one else does, recognizes a twisted kind of truth in what he says. You don't know if it's wisdom or simply the same kind of madness as yours, seen from a different angle.`,
      };

      return `You sit, and this time you do it with the real intention of listening all the way through.

"The Elders of this city have spent centuries treating young ones like you as spare parts," he says. "Marcus, the others... none of them were innocent in the game we all play here. And you," he adds, watching you with an attention that feels uncomfortably precise, "you already know what it's like to have someone decide for you without asking. You were turned without your consent. Welcome to a world that works exactly this way, at every level, all the time, except most people don't have the courage to admit it."

${clanReactions[character.race]}

You don't say yes. But you don't say no with the firmness you expected of yourself, either.`;
    },

    nembrini_rechazo: () => `You don't sit. There's no intention of letting this conversation go anywhere.

Nembrini sighs, with a disappointment that seems almost genuine. "How predictable," he says, standing with a movement far too calm for someone who's supposed to be worried. "You all start the same way. In such a hurry to decide who the villain of the story is." He adjusts his sleeve with deliberate calm. "At least this will be quick."`,

    combate_nembrini: (character, flags) => {
      const debilidadLine = flags?.debilidad_nembrini
        ? ` You remember what you know: there's a moment, right after he feeds, when his guard drops. He hasn't fed yet tonight. But you can try to force the situation in your favor.`
        : '';

      return `The conversation ends, and with it any possibility of resolving this without blood. Nembrini moves with the confidence of someone who's survived for centuries by being stronger than whoever stands in front of him.${debilidadLine}

There's no more time to think. Only to act.`;
    },

    final_trágico_check: (character, flags) => {
      if (flags?.nembrini_tentado) {
        return `The fight stops before it goes anywhere. Nembrini takes a step back, studying you with an attention different from before. "You didn't come here to actually kill me," he says, not as a question. "You came to see if I was right." He lowers his hands. "Then let's talk for real, without the fighting part in the way."

It's time to decide, truly, what you're going to do with whatever it is you're feeling right now.`;
      }
      return `Neither of you gains a clear advantage. Nembrini retreats into the shadows at the back of the room, and for a moment it looks like he might vanish altogether. "You don't deserve to die here," he says, with a coldness that allows no argument. "But you don't deserve to win either. Not today."

Before you can react, he's already gone.`;
    },

    final_trágico_check_tentado: (character, flags) => {
      if (flags?.nembrini_tentado) {
        return `The fight stops before it goes anywhere. Nembrini takes a step back, studying you with an attention different from before. "You didn't come here to actually kill me," he says, not as a question. "You came to see if I was right." He lowers his hands. "Then let's talk for real, without the fighting part in the way."

Nembrini waits for your answer with a patience that doesn't seem fake. He isn't pressuring you. He simply knows that whatever you decide, it's entirely yours to decide.`;
      }
      return `Neither of you gains a clear advantage. Nembrini retreats into the shadows at the back of the room, with the calm of someone who doesn't consider this a defeat. "You don't deserve to die here," he says, with a coldness that allows no argument. "But you don't deserve to win either. Not today."

Before you can fully react, he's already gone, leaving you with nothing but the certainty that this isn't over.`;
    },

    oferta_final: () => `Nembrini waits for your answer with a patience that doesn't seem fake. He isn't pressuring you. He simply knows that whatever you decide, it's entirely yours to decide.`,

    final_leal_gate: () => `Nembrini falls. The victory is clear, almost simple. But before you can consider the matter closed, something pulls your attention elsewhere.`,

    final_pragmatico_gate: () => `Nembrini falls, though not in a way that would hold up to much scrutiny if anyone bothered to look closely. You have time to think about what you're going to do with what happened tonight, before anyone else arrives at the scene.`,

    final_leal: () => `Nembrini falls, and with him falls the weight of every night the city has spent afraid without knowing why. It's not a clean or easy victory, but it's a real one.

When you return to Eclipse, Selene is waiting for you with an expression you haven't seen on her before: something like genuine relief. "The Prince wants to see you," she says. "And it's not the kind of meeting most newly turned get in their first week."

The Prince turns out to be exactly what you expected and nothing you imagined, all at once: a presence that fills the room without needing to raise his voice. "You did what Cainites with centuries of experience couldn't," he says, with no unnecessary ceremony. "That isn't forgotten in this city. Neither is what you're capable of doing. From now on, I'll watch you with the same care I give to those who concern me most."

You gain a place in the city's Cainite society, recognized and respected. You also gain, permanently, the constant attention of someone who never stops watching. In the World of Darkness, you rarely get one without the other.`,

    final_pragmatico: () => `Nembrini falls, but not in a way that would hold up to much scrutiny if anyone bothered to look closely. Before the Prince's Guard arrives to inspect the scene, you have time to decide exactly what part of tonight's events you're going to share, and what part you're going to keep for yourself.

Selene listens to your edited version of events with a slightly raised eyebrow, the only sign that she knows there's more to it than you're saying. She doesn't say anything about it. Some things, she's learned, are better left unasked.

The Prince is satisfied with how the case was resolved. You receive your reward, your recognized place in the city, and a solid reputation as someone capable. What no one knows is that you also kept certain influence that officially shouldn't exist: contacts Nembrini had, information you decided not to hand over entirely. In this city, knowledge no one knows you have is worth more than any official favor.`,

    final_rebelde: () => `"Good," Nembrini says, and for the first time since you've known him, his calm seems genuinely satisfied rather than merely controlled. "Then let's begin for real."

There's no ceremony, no grand welcome speech. Just the strangely calm feeling of having made a decision you can no longer undo. In the nights that follow, Nembrini teaches you a different way of understanding what you are: without the hierarchies you'd barely begun learning, without the authority of a Prince who never asked if you wanted this.

Selene doesn't come looking for you again. She's probably already figured out what happened, and wisely decided that chasing someone who's chosen this path isn't a battle worth having. The city keeps turning without you on its official radar.

You start your own path, free of anyone's control but your own, with Nembrini as the only guide you've decided to accept. You don't know yet whether that makes you something better or simply something different. Maybe, in the World of Darkness, that distinction never mattered as much as everyone pretends.`,

    final_tragico: () => `There's no victory tonight, not even the kind of defeat you can recount afterward with some pride. Nembrini is gone, and all that's left with you is the certainty that you failed at the one thing the Prince asked of you.

When you return to Eclipse, Selene says nothing for a long while. There's no reproach in her silence, which, somehow, is worse than if there had been. "He'll show up again," she finally says. "People like him don't give up just because someone tried once."

The Prince doesn't grant you a second audience. The city moves on, with Nembrini still out there somewhere, waiting for his next move. Your name isn't spoken with contempt exactly, but not with any recognition either. You're simply, to this city's Cainite society, someone who tried and wasn't enough. Sometimes that's the only truth that remains.`,

    final_secreto: () => `Something doesn't quite add up, even after everything else has been resolved. You return, almost without deciding to, to the same place where it all began: Eclipse's back room, where your Sire gave you the Embrace without explaining almost any of what it meant.

This time, the figure doesn't stay blurred. You can see it clearly for the first time, and there's something in its expression you recognize immediately: the same calculating calm you saw in Nembrini. "You knew what was happening," you say, not as a question. "From the start."

Your Sire doesn't deny it. "I knew something was going on," they admit. "Not how far it went. But I needed someone new, someone with no history, investigating it. Someone no one would connect to me." A pause. "I chose well, in the end."

The revelation settles slowly, retroactively changing the meaning of every decision you've made since that first night. You weren't simply turned out of urgent necessity. You were turned as a tool, carefully chosen for a purpose they never bothered to explain.

What you do with that information, now that you have it, is the question left for you to answer. This story, at least this part of it, has come to an end. But it clearly isn't the only question left open in Valdris... or wherever you decide to go from here.`,

    choices: {
      convergencia_investigacion: [
        '"I\'ll look for other Cainites who knew Marcus."',
        '"I\'ll go search the place where he disappeared."',
        '"I\'ll use my mortal contacts, without them knowing what I am."',
      ],
      convergencia_almacen: [
        '"I go in quietly, without anyone noticing."',
        '"I go in by force, directly."',
        '"First, I warn the Prince."',
      ],
      convergencia_testigo: [
        '"I speak to him calmly, trying to earn his trust."',
        '"I press directly. There\'s no time for delicacy."',
        '"I go into his fractured mind to see what he saw."',
      ],

            nembrini_encuentro: [
        '"I\'ll listen. But it won\'t change anything."',
        '"I\'ll really listen. Convince me."',
        '"I didn\'t come here to talk."',
      ],
      oferta_final: [
        '"Join me. Let me show you what this really means."',
        '"No. I\'m going to stop you, even if it\'s the last thing I do."',
      ],
      final_trágico_check_tentado: [
        '"Join me. Let me show you what this really means."',
        '"No. I\'m going to stop you, even if it\'s the last thing I do."',
        '"I\'m not done with you."',
      ],
      final_leal_gate: [
        '"Before anything... there\'s something I need to check for myself."',
        '"It\'s time to inform the Prince of what happened."',
      ],
      final_pragmatico_gate: [
        '"Before anything... there\'s something I need to check for myself."',
        '"I\'ll decide exactly what part of this I\'m going to tell."',
      ],
    },

  },

  ru: {

    inicio: () => `По четвергам Эклипс звучит иначе. Вы приходите сюда месяцами, всегда за один и тот же столик у бара, всегда с одним и тем же ощущением, что у этого места есть второй этаж, который вам никогда не показывали. Никто не говорил этого прямо, но вы каким-то образом знаете, что внутри этих стен обычные правила не совсем действуют.

Этой ночью кто-то садится рядом с вами так, что вы не заметили его приближения. Это должно было насторожить. Но не настораживает.

"Вы приходите достаточно долго," — говорит голос, который вы не совсем узнаёте, — "чтобы мы начали доверять вам." Рука опускается на вашу, холодная так, что это не имеет ничего общего с кондиционером. "Пойдёмте со мной. Я хочу вам кое-что показать."`,

    el_abrazo: () => `Подсобка Эклипса не должна быть такой большой. Свет танцпола сюда не доходит; остаётся только свеча и фигура, которую вы не можете разглядеть до конца, будто ваши глаза отказываются на ней сфокусироваться.

"Это будет больно," — говорит голос с честностью, за которую вы почти благодарны. "Только один раз. Больше никогда."

Ответить не остаётся времени. Приходит боль, не похожая ни на что, что вы чувствовали раньше, холод, начинающийся в груди и расходящийся наружу, а затем — тишина. Когда вы снова открываете глаза, у мира другой цвет. Не буквально, а может, и буквально. Всё выглядит острее, ближе, голоднее.`,

    despertar: (character) => {
      const reactions = {
        brujah: `Первое, что вы чувствуете, — это ярость. У неё пока нет чёткой цели, просто чистая, неотфильтрованная злость поднимается от живота к сжатым кулакам. Хочется что-то сломать, закричать, ударить по стене, просто чтобы почувствовать, как отвечает новое тело. Оставаться неподвижным стоит настоящих усилий.`,
        toreador: `Первое, что вы замечаете, — это жестокая красота всего вокруг. Пламя свечи, текстура дерева на стене, даже пыль, парящая в воздухе, обладают почти болезненной чёткостью. Вы могли бы смотреть на эту свечу вечно. Часть вас понимает, что это тоже опасно.`,
        ventrue: `Первое, что вы делаете, даже не успев до конца осознать произошедшее, — оцениваете комнату: выходы, кто ещё здесь, какой у вас контроль над ситуацией. Инстинкт командования приходит почти раньше страха. Вы поднимаетесь с спокойствием, о существовании которого в себе даже не подозревали.`,
        nosferatu: `Первое, что вы чувствуете, — это изменение в собственном теле, что-то, что не сходится, будто ваша кожа больше не полностью принадлежит вам. Вы инстинктивно подносите руки к лицу, ища что-то, что подтвердит или опровергнет ощущение. Зеркала поблизости нет. Вы почти этому рады.`,
        malkavian: `Первое, что вы слышите, — это смех. Он ваш, и вы не совсем понимаете, почему смеётесь, над чем и стоит ли остановиться. За смехом кроется что-то ещё: странная ясность, будто вы вдруг увидели вещи под углом, который никто больше не рассматривал. Вы пока не знаете, дар это или начало трещины.`,
      };
      return `${reactions[character.race]}

Перед вами фигуры, которая привела вас сюда, уже нет. Вместо неё — женщина со спокойным выражением лица, наблюдающая за вами с терпением того, кто видел эту самую сцену уже десятки раз. "Добро пожаловать," — говорит она без особой теплоты, но и без враждебности. "Я Селена. И прямо сейчас нам с вами нужно поговорить об одной проблеме."`;
    },

    selene_explica: () => `Селена садится напротив вас со спокойствием того, кто уже вёл этот разговор раньше, хотя никогда с вами. "Я знаю, у вас есть вопросы. На большинство ответы придут со временем. Сейчас мне нужно, чтобы вы поняли две вещи."

Она поднимает палец. "Первое: это не было подарком. Это было решение, принятое кем-то по своим собственным причинам, и теперь вы часть чего-то, что не выбирали до конца. Это несправедливо, но такова реальность."

Она поднимает второй палец. "Второе, и это то, что действительно важно сегодня ночью: за последние несколько недель исчезли несколько наших. Без борьбы, без шума, без следа. В один день они здесь, а на следующий — ничего. Ни тела, ни объяснения, ни свидетелей."

Её выражение слегка ожесточается. "Принц не может позволить, чтобы это продолжалось, но и не может расследовать это открыто, не вызвав паники. Ему нужен кто-то, кого никто не узнает, кто-то без истории и ещё не сформированных привязанностей." Она смотрит прямо на вас. "Кто-то в точности как вы, только что прибывший этой самой ночью."`,

    primera_sed: (character) => {
      const scenes = {
        bagger: `Селена ведёт вас к задней части больницы, где служебная дверь в этот час удобно остаётся без присмотра. "Первый раз самый трудный," — говорит она, указывая на холодильник с символом красного креста. "После этого вы сами найдёте свой путь."

Ваши руки двигаются почти сами, будто тело помнит процедуру, которой ваш разум никогда не учился. Пакет крови не имеет особого вкуса, холодный и клинический, но облегчение, которое вы чувствуете от первого глотка, настолько сильное, что удивляет вас, заставляя перехватить дыхание, хотя оно вам больше не нужно.`,
        osteopath: `Селена достаёт вам, не объясняя толком как, белый халат и шнурок с бейджем, который не должен пройти даже самую поверхностную проверку. И всё же это работает: администратор частной клиники едва смотрит на вас, прежде чем пропустить.

Пациент, которого вы обслуживаете, уверен, что вы берёте кровь для планового анализа. Он болтает с вами о своих выходных, пока пробирка заполняется, ничего не подозревая, а вы чувствуете укол чего-то, что могло бы быть виной, если бы вы позволили себе почувствовать это до конца. Вы не позволяете. Пока нет.`,
        siren: `Селена оставляет вас на танцполе Эклипса с единственной инструкцией: "Выберите того, кто хочет быть выбранным." Особых усилий не требуется. Незнакомец, чей взгляд уже некоторое время искал ваш, подходит прежде, чем вам приходится что-либо делать.

Танец превращается во что-то другое за считанные минуты, близость, которую он активно ищет, а вам почти не приходится притворяться. Укус, когда он случается, ощущается почти как естественная часть ритма. Он даже не вспомнит это ясно завтра. А вы вспомните.`,
        sandman: `Селена ведёт вас к жилому дому, и, без особой ясности как именно вы туда попадаете, вы оказываетесь в чужой спальне, где кто-то крепко спит. "Осторожно," — шепчет она. "Не будите. Не нужно."

Вы приближаетесь и обнаруживаете, почти инстинктивно, как это сделать: сон человека углубляется от вашего прикосновения, и она даже не шевелится, пока вы питаетесь. Когда вы заканчиваете, видимого следа нет, воспоминания она не сформирует. Только особенно яркий сон, который она забудет, проснувшись.`,
      };
      return scenes[character.class];
    },

    transicion_investigacion: () => `Когда вы возвращаетесь в Эклипс, Селена уже ждёт вас с двумя напитками, в которых нет алкоголя ни для одного из вас. "Лучше?" — спрашивает она, на самом деле не ожидая ответа. "Теперь, когда вас больше не будут отвлекать мысли о еде, давайте поговорим о том, откуда можно начать тянуть за нить."

Она кратко излагает то, что известно, а известно немного: последнего исчезнувшего Каинита звали Маркус, и его никто не видел уже четыре ночи. Тела нет. Следов борьбы нет. Есть только отсутствие, которое начинает давить на весь город.`,

    convergencia_investigacion: () => `У вас есть имя, дата и практически ничего больше. Город велик, а ночь молода, но не бесконечна. Нужно решить, с чего начать тянуть за нить.`,

    investigar_cainitas: () => `Есть бар, которого нет ни на одной туристической карте, спрятанный за дверью без вывески, куда каиниты города приходят, когда хотят поговорить без смертных ушей. Вы находите того, кто знал Маркуса: нервного, уклончивого, с взглядом человека, знающего больше, чем готов признать вслух.`,

    investigar_exceptional: () => `Вы точно знаете, какие слова использовать, какие паузы оставлять, когда настаивать, а когда отступить. В конце концов ваш собеседник ломается полностью, с видом человека, который неделями хотел кому-то это рассказать.

"Маркус расследовал что-то самостоятельно. Что-то о Старейшине, который якобы умер, или пропал, или кто знает. Он произнёс слово, которого я никогда не слышал: Диаблери. Он не хотел объяснять, что это значит. Только сказал, что если он прав, всё будет гораздо хуже, чем думает Принц." Он сглатывает, хотя в этом нет необходимости. "Это был последний раз, когда я с ним разговаривал."`,

    investigar_exito: () => `Вам удаётся разговорить его, хотя и неохотно. "Маркус давно вёл себя странно. Расспрашивал о Старейшинах города, о тех, кто давно не появлялся в обществе." Он понижает голос. "В последний раз, когда я его видел, он сказал, что нашёл что-то на складе на окраине. Больше он ничего не сказал."`,

    investigar_parcial: () => `Вы получаете что-то, но лишь наполовину: собеседник замыкается, как только замечает, что вы слишком давите. "Я ничего не знаю," — повторяет он, хотя выражение его лица говорит обратное. Прежде чем он уходит окончательно, вы слышите, как он бормочет себе под нос: "Склад... окраина..." Вы потеряли больше времени, чем ожидали, и теперь весь бар смотрит на вас с большим любопытством, чем хотелось бы.`,

    investigar_fallo: () => `Вы выбираете не те слова или не тот момент, или и то, и другое. Ваш собеседник резко встаёт. "Не знаю, кто вас послал, но перестаньте задавать вопросы." Он исчезает в толпе прежде, чем вы успеваете исправить ошибку. Кажется, весь бар неловко долго на вас смотрел.`,

    registrar_escena: () => `Квартира Маркуса по-прежнему опечатана изнутри с осторожностью того, кто не хочет, чтобы смертные о чём-то узнали. Никто не трогал её с момента его исчезновения. Если здесь есть что найти, оно всё ещё здесь.`,

    registrar_exceptional: () => `Вы не оставляете без внимания ни один угол. Под расшатанной половицей вы находите тетрадь, спрятанную с явной осторожностью. Внутри почерк Маркуса, становящийся всё более нервным по мере продвижения по страницам, документирует ночи слежки за человеком, который, согласно его собственным записям, "не стареет, никогда не появляется дважды в одном месте и оставляет после себя каинитов, которые просто перестают существовать." Последняя запись, подчёркнутая настолько сильно, что порвала бумагу, гласит только: "Диаблери. Должно быть это. Сегодня ночью я это подтвержу."

После этой записи больше ничего нет.`,

    registrar_exito: () => `Вы находите признаки того, что Маркус ушёл в спешке: открытый ящик, разбросанные бумаги. Среди них карта города с отмеченной красным маркером зоной рядом с промышленным портом. Письменного объяснения, почему его интересовало это место, нет, но метка свежая.`,

    registrar_parcial: () => `Вы обыскиваете квартиру без особого порядка, и хотя ничего определённого не находите, есть чёткое ощущение, что кто-то ещё был здесь до вас, обыскивая с большей осторожностью, чем позволил бы Маркус при жизни. Кто бы это ни был, он что-то забрал. Вопрос в том, что именно.`,

    registrar_fallo: () => `Вы тратите больше времени, чем следовало, не находя ничего полезного, а звук ваших собственных движений слишком громко отдаётся в здании, которое должно быть пустым. Когда вы наконец сдаётесь, у вас остаётся неприятное ощущение, что вы оставили больше следов, чем собрали.`,

    contactos_mortales: (character) => {
      const clanFlavor = {
        brujah: `Вы не утруждаете себя скрывать спешку. Ваш контакт, швейцар соседнего клуба, который вам не раз обязан, замечает ваше напряжение, но решает не спрашивать почему.`,
        toreador: `Вы тщательно выбираете контакт: кого-то из местного мира искусства, с радостью болтающего с вами обо всём, включая слухи, которыми он даже не осознаёт, что делится не с тем человеком.`,
        ventrue: `Вы обращаетесь к кому-то с доступом к информации, которой у большинства людей нет: городскому чиновнику, относящемуся к вам с автоматическим уважением того, кто научился не задавать вопросов.`,
        nosferatu: `Вы предпочитаете не показываться полностью. Вы говорите из тени переулка с кем-то, кто даже не видит толком ваше лицо, и всё же доверяет вашему голосу больше, чем следовало бы.`,
        malkavian: `Ваш контакт смотрит на вас со смесью привязанности и осторожности, которую вы уже хорошо знаете: он считает вас странным, но безобидным, что сегодня ночью играет вам на руку.`,
      };
      return `${clanFlavor[character.race]}

Вы спрашиваете, стараясь не звучать как то, что вы есть, видел ли кто-нибудь что-то странное за последние недели: исчезновения, людей, переставших появляться без объяснений, слухи о чём-то, что не сходится.`;
    },

    contactos_exceptional: () => `Ваш контакт оживляется больше, чем ожидалось. "Раз уж вы спросили, да. Есть склад в промышленной зоне, который годами простаивал закрытым, а теперь по ночам там движение. Никто не входит и не выходит через главную дверь, но горит свет. А в прошлом месяце пропал охранник из этого района. Полиция списала это на то, что он ушёл без предупреждения, но никто из знавших его в это не поверил."`,

    contactos_exito: () => `Ваш контакт задумывается на мгновение, прежде чем ответить. "Слухи есть всегда. Но да, недавно кто-то упоминал странное движение около порта, в одном из заброшенных складов. Ничего, за что я мог бы поручиться, но достаточно, чтобы люди избегали этой улицы по ночам."`,

    contactos_parcial: () => `Вашему контакту особо нечего предложить, но, прощаясь, он добавляет, будто это неважно: "Ах да, кстати, моя соседка говорит, что слышала крики несколько ночей назад, рядом с промышленной зоной. Решила, что это кошки." Звучит не слишком уверенно в собственной теории.`,

    contactos_fallo: () => `Разговор никуда не приводит. Ваш контакт больше заинтересован в разговоре о собственной жизни, чем в предоставлении информации, и увести его от темы оказывается труднее, чем ожидалось. Вы уходите с ощущением, что зря потратили целую ночь.`,

    el_patron: (character, flags) => {
      const diablerieLine = flags?.knows_diablerie_word
        ? ` Когда вы произносите слово "Диаблери" вслух, что-то меняется в выражении лица Селены. Не совсем удивление. Скорее подтверждение страха, который она уже давно молча носила в себе.`
        : '';

      return `Вы возвращаетесь в Эклипс с руками, полными фрагментов, которые по отдельности мало что значат. Селена выслушивает каждую деталь, не перебивая, с сосредоточенностью человека, выстраивающего мысленную карту, которую вы сами пока не можете разглядеть до конца.${diablerieLine}

Закончив, вы замолкаете на слишком долгий, неудобный момент. "Есть закономерность," — наконец говорит она. "Всё указывает на один и тот же район: промышленный квартал, рядом с портом. Склад, который годами был закрыт и, судя по всему, снова стал активен." Она поджимает губы, будто следующая фраза даётся ей труднее, чем кажется. "Пора пойти посмотреть, что там внутри."`;
    },

    convergencia_almacen: () => `Склад возвышается в конце плохо освещённой улицы, окна заколочены изнутри, а замок на главной двери выглядит скорее декоративным, чем функциональным. Охраны снаружи не видно, что в вашем ещё очень свежем опыте Каинита никогда не бывает хорошим знаком.

Нужно решить, как войти.`,

    almacen_sigilo: () => `Вы обходите здание в поисках входа, отличного от главной двери. Находите плохо запечатанное окно с тыльной стороны, достаточно широкое, чтобы протиснуться, если двигаться аккуратно и не бояться немного испачкаться по пути.`,

    sigilo_exceptional: () => `Вы двигаетесь так, будто занимались этим всю свою жизнь, а не несколько ночей. Ни одна доска не скрипнет, ни одна тень не шелохнётся лишний раз. Вы внутри прежде, чем ваше тело успевает осознать движение, и никто в здании даже не подозревает, что они больше не одни.`,

    sigilo_exito: () => `Вам удаётся проскользнуть незамеченным, хотя сердце, которое больше не бьётся, по привычке настаивает на учащённом ритме. Вы внутри. Это главное.`,

    sigilo_parcial: () => `Вы входите, но не без шума: металлический предмет с глухим стуком падает на пол, эхо разносится громче, чем хотелось бы в таком тихом здании. Вы замираете на мгновение, кажущееся вечностью. Никто не приходит проверить. И всё же вы понимаете, что потратили часть запаса манёвра, даже не начав.`,

    sigilo_detectado: () => `Почти получилось. Почти. Один лишний скрип, движение под неправильным углом — и из теней внутри появляется фигура, явно не ожидавшая компании, но и не слишком удивлённая, что кто-то попытался. Кем бы ни был тот, кто работает на хозяина этого места, он не намерен пропускать вас просто так.`,

    almacen_combate_forzado: () => `Времени на изящество нет. Ваше тело, всё ещё изучающее свои новые возможности, отвечает силой, удивляющей даже вас самих.`,

    almacen_fuerza: () => `Вы не утруждаете себя поисками обходных путей. Главная дверь поддаётся от одного удара, замок разлетается на куски по полу. Шум разносится по всему зданию, и вскоре появляется кто-то, готовый заставить вас заплатить за столь нескромный вход.`,

    avisar_principe: (character) => {
      const clanReactions = {
        brujah: `Вы ненавидите просить у кого-либо разрешения, и это видно по сжатой челюсти, пока Селена делает звонок. Но даже вы признаёте, что войти в одиночку против того, что уже поглотило нескольких опытных Каинитов, — не храбрость. Это просто не дожить до следующей недели.`,
        toreador: `Вы воспринимаете это с той же практичной элегантностью, с которой подходите почти ко всему: просить подкрепление — не слабость, это просто умение хорошо разыгрывать свои карты. Селена, кажется, молча одобряет ваш здравый смысл.`,
        ventrue: `Вот именно так, думаете вы, всё и должно делаться. Цепочка командования, скоординированные ресурсы, никаких лишних движений. Впервые с тех пор, как вы очнулись обращённым, что-то кажется знакомым.`,
        nosferatu: `Мысль о том, чтобы оказаться под наблюдением стражи Принца, пусть и ненадолго, беспокоит вас больше, чем ожидалось. Вы бы предпочли остаться в тени. Но альтернатива хуже, так что вы соглашаетесь.`,
        malkavian: `Вы смеётесь, звук, который сами до конца не понимаете, и соглашаетесь прежде, чем Селена успевает договорить предложение. Какая-то часть вашего разума уже знала, что так и будет.`,
      };

      return `${clanReactions[character.race]}

Селена делает короткий звонок, и быстрее, чем вы ожидали, к вам присоединяются три фигуры с профессиональным и совершенно не успокаивающим выражением лиц. "Принц рассчитывает, что это будет решено," — говорит одна из них без дальнейших представлений. "Тихо необязательно. Главное — решено."`;
    },

    almacen_refuerzos: () => `С подкреплением рядом главная дверь перестаёт быть препятствием и превращается в простую формальность. У того, кто работает внутри, нет реальных шансов против такой решительной группы, хотя это не мешает ему всё же попытаться.`,

    interior_almacen: (character, flags) => {
      const principeLine = flags?.principe_informado
        ? ` Подкрепление Принца обыскивает остальную часть здания с холодной эффективностью, почти более тревожной, чем то, что вы находите.`
        : '';

      return `Внутренность склада совсем не похожа на то, что вы ожидали, даже после всего увиденного за последние ночи. Цепи, закреплённые на стенах, тёмные пятна на бетонном полу, которые никто не удосужился отмыть, и запах, который ваша новая природа узнаёт раньше, чем разум успевает его осознать: кровь Каинита, не смертного. Тонкое отличие, но безошибочное, стоит его узнать.${principeLine}

И тогда, среди теней в самой глубине склада, что-то шевелится. Что-то живое. Или, если точнее в вашем новом словаре, что-то немёртвое.`;
    },

    testigo_encuentro: () => `То, что движется в тенях, — не угроза, по крайней мере не в том смысле, в каком вы ожидали. Это Каинит, или то, что от него осталось: прикованный к стене, с ранами, которые никак не закроются до конца, и взглядом, мечущимся между ужасом и чем-то похожим на облегчение при виде вас.

"Вы... вы от него?" — спрашивает он голосом, дрожащим сильнее, чем это вообще возможно для вампира. "Нет. Нет, конечно нет. За мной никто не приходит. Никто и никогда не приходит за теми, кого он оставляет в живых." Он смеётся, надломленным звуком, в котором нет ничего смешного. "Да, он оставляет некоторых в живых. Это хуже, чем убить, если подумать."

Очевидно, он что-то знает. Вопрос в том, как заставить его рассказать, не дав страху заставить его замолчать окончательно.`,

    convergencia_testigo: () => `Нужно решить, как к нему подойти. Он напуган, надломлен, и любое неверное движение может заставить его полностью замкнуться или, того хуже, впасть в панику.`,

    testigo_calma: () => `Вы подходите медленно, держа руки на виду, максимально тихим голосом. Вы не его враг, и это должно быть ясно прежде, чем вы сможете о чём-либо спросить.`,

    testigo_calma_exceptional: () => `Что-то в вашей манере говорить с ним, или, может быть, просто тот факт, что кто-то наконец потрудился попытаться, заставляет его полностью раскрыться. Он рассказывает всё: куда его отвели, как выглядело это место, даже деталь, важность которой сам едва осознаёт. "У него есть слабость," — шепчет он. "Когда... когда он делает то, что делает, когда питается так, он какое-то время уязвим после этого. Никто больше вам этого не скажет, потому что никто больше этого не видел и не выжил, чтобы рассказать."`,

    testigo_calma_exito: () => `Постепенно, с долгими паузами и фразами, начинающимися несколько раз прежде, чем закончиться, он даёт вам то, что нужно: точное местоположение, где его держат, в глубине заброшенного здания недалеко отсюда. "Будьте осторожны," — добавляет он, будто это нужно было говорить.`,

    testigo_calma_parcial: () => `Вам удаётся его разговорить, но страх дробит его фразы на куски, которые трудно соединить. "Рядом с рекой," — повторяет он несколько раз, — "рядом с рекой, в чём-то, что раньше было... чем-то, не помню, больше ничего не помню." Немного, но это отправная точка.`,

    testigo_calma_fallo: () => `Что-то в вашем подходе, каким бы мягким ни было намерение, заставляет его отступить до предела цепей. Он замыкается в себе, бормоча что-то себе под нос, что вы не можете разобрать, и как бы вы ни старались, заставить его снова открыть рот этой ночью не удаётся.`,

    testigo_presion: () => `У вас нет ни времени, ни терпения на деликатность. Вы приближаетесь с явным намерением дать понять, что ответить — самый простой вариант, который у него есть этой ночью.`,

    testigo_presion_exito: () => `Срабатывает, хотя вы не испытываете особой гордости от этого. Он говорит быстро, спотыкаясь на словах, выдавая местоположение убежища, почти не переводя дыхание между фразами, будто хочет как можно скорее закончить этот разговор. Вы получаете нужное. Цену, если она есть, вы заплатите позже.`,

    testigo_presion_parcial: () => `Он даёт вам что-то, между заиканиями и оборванными фразами, но страх затуманивает детали больше, чем хотелось бы. "Рядом с водой... старое место..." Не так точно, как вы надеялись, но больше, чем было до входа.`,

    testigo_presion_ataque: () => `Паника побеждает раньше вас. Отчаянным, на удивление быстрым для его состояния движением он освобождается от одной из цепей и бросается на вас — не чтобы атаковать, а просто чтобы сбежать от того, что, как ему кажется, вы собираетесь с ним сделать. Приходится удержать его, прежде чем он причинит себе ещё больший вред.`,

    testigo_mente_rota: (character) => {
      const isSandman = character.class === 'sandman';
      const flavor = isSandman
        ? `Вам не нужно, чтобы он говорил. Едва коснувшись его разума, вы уже внутри, скользя между обрывками его воспоминаний с той же лёгкостью, с какой проникаете в сны своих жертв. Ни один барьер не устоит перед вами, когда сон и ужас так похожи друг на друга.`
        : `Вам не нужно, чтобы он говорил. Ваш собственный разум, столь же ненадёжный, как его в худшие ночи, находит что-то вроде общего языка с его безумием. Вы видите то, что видел он, фрагментами, беспорядочно, но по-настоящему.`;

      return `${flavor}

Другой склад, не этот, севернее, у воды. Фигура, движущаяся сквозь тени с уверенностью, не допускающей сомнений. И прямо перед тем, как воспоминание рассыпается на бесполезные осколки, — момент уязвимости: точный миг, после кормления, когда даже Аурелио Немброни не защищён от хорошего удара.

Вы выходите из его разума с большим, чем мог бы дать любой разговор.`;
    },

    hacia_la_guarida: () => `Вы оставляете свидетеля с обещанием, возможно, пустым, что кто-то придёт помочь ему, когда всё это закончится. Селена, всё это время ждавшая снаружи, выслушивает то, что вы узнали, с выражением того, кто предпочёл бы не делать следующий шаг, но знает, что другого выхода нет.

"Значит, теперь мы знаем, где он," — говорит она наконец. "Чего мы не знаем, так это выйдете ли вы оттуда целым."`,

    llegada_guarida: (character, flags) => {
      const debilidadLine = flags?.debilidad_nembrini
        ? ` И есть кое-что ещё, что вы держите при себе, приближаясь: вы знаете, что бывает момент, после того как он питается, когда даже он уязвим.`
        : '';

      return `Здание, к которому ведёт информация свидетеля, больше, чем вы ожидали, и намного тише. Никакой охраны у входа, никаких очевидных ловушек, ничего, что указывало бы, что тот, кто здесь живёт, нуждается в защите так, как это нужно большинству из вас.${debilidadLine}

Селена остаётся позади, в тени входа. "Дальше я уже не могу вам помочь," — говорит она с честностью, которую вы от неё не ожидали. "Что бы там ни случилось, решать вам."`;
    },

    nembrini_encuentro: () => `Вы находите его в комнате, когда-то бывшей залом для собраний, сидящим со спокойствием того, кто ждал всю ночь, а может, всю неделю, пока кто-нибудь сюда доберётся. Он не выглядит удивлённым, увидев вас. Он вообще ничем не выглядит удивлённым.

"Я знал, что кто-нибудь рано или поздно придёт," — говорит он, не вставая. "Не ожидал, что вы окажетесь настолько молоды." Он жестом указывает на пустое место напротив, приглашение без каких-либо обязательств. "Можем сделать это трудным путём. Или вы можете сесть на пять минут и послушать, почему я делаю то, что делаю, прежде чем решить, что с этим делать."`,

    nembrini_escucha_firme: () => `Вы садитесь, но с первой же секунды держите чёткую дистанцию. Он это замечает и улыбается, будто эта реакция кажется ему почти трогательной.

"Старейшины этого города веками относились к молодым вроде вас как к запасным частям," — говорит он, не повышая голоса. "Маркус, остальные, кто 'исчез'... поверьте, никто из них не был невиновен в большой игре, в которую мы все здесь играем. В каком-то смысле они были полезнее мёртвыми, чем когда-либо живыми." Он слегка наклоняется вперёд. "Я просто решил перестать ждать, пока кто-то другой это исправит."

Вы выслушиваете каждое слово. И когда он заканчивает, вы остаётесь ровно там же, где были до того, как сели: убеждённым, что то, что он делает, неправильно, сколько бы оправданий он ни приводил.

"Понятно," — говорит он, без труда читая ваше выражение лица. Он медленно встаёт. "Тогда больше сказать особо нечего."`,

    nembrini_escucha_abierto: (character) => {
      const clanReactions = {
        brujah: `Что-то в его речи о Старейшинах, обращающихся с молодыми как с расходным материалом, задевает нерв, натянутый ещё до этой ночи, с того самого момента, как вас обратили, не спросив.`,
        toreador: `Есть что-то почти прекрасное в жестокой ясности, с которой он описывает систему, приведшую его сюда. Не то чтобы вы полностью согласны. Просто впервые кто-то говорит с вами с полной честностью о том, как на самом деле устроен этот мир.`,
        ventrue: `Как человек, привыкший мыслить структурами власти, вы не можете не признать холодную логику за его словами, хотя метод, который он выбрал для её воплощения, кажется вам, мягко говоря, крайним.`,
        nosferatu: `Вы лучше многих знаете, каково это, когда система решает, что вы не стоите заботы. Это не значит, что вы одобряете то, что он делает. Но это значит, что на мгновение вы по-настоящему это понимаете.`,
        malkavian: `Какая-то часть вашего разума, та, что всегда видит углы, недоступные другим, узнаёт в его словах искажённую, но правду. Вы не знаете, мудрость это или просто такое же безумие, как ваше, увиденное под другим углом.`,
      };

      return `Вы садитесь, и на этот раз с настоящим намерением выслушать до конца.

"Старейшины этого города веками относились к молодым вроде вас как к запасным частям," — говорит он. "Маркус, остальные... никто из них не был невиновен в игре, в которую мы все здесь играем. А вы," — добавляет он, глядя на вас с вниманием, которое кажется неприятно точным, — "вы уже знаете, каково это, когда кто-то решает за вас, не спрашивая. Вас обратили без вашего согласия. Добро пожаловать в мир, который работает именно так, на каждом уровне, всё время, вот только у большинства не хватает смелости это признать."

${clanReactions[character.race]}

Вы не говорите "да". Но и не говорите "нет" с той твёрдостью, которую от себя ожидали.`;
    },

    nembrini_rechazo: () => `Вы не садитесь. Нет никакого намерения позволить этому разговору куда-то привести.

Немброни вздыхает с разочарованием, кажущимся почти искренним. "Как предсказуемо," — говорит он, вставая движением слишком спокойным для того, кто должен бы волноваться. "Все вы начинаете одинаково. Так спешите решить, кто злодей в этой истории." Он неспешно поправляет рукав. "По крайней мере, это будет быстро."`,

    combate_nembrini: (character, flags) => {
      const debilidadLine = flags?.debilidad_nembrini
        ? ` Вы вспоминаете то, что знаете: есть момент, сразу после того как он питается, когда его защита падает. Сегодня ночью он ещё не питался. Но вы можете попытаться обратить ситуацию в свою пользу.`
        : '';

      return `Разговор заканчивается, а вместе с ним и любая возможность разрешить это без крови. Немброни движется с уверенностью того, кто веками выживал, будучи сильнее любого противника.${debilidadLine}

Времени на раздумья больше нет. Только на действие.`;
    },

    final_trágico_check: (character, flags) => {
      if (flags?.nembrini_tentado) {
        return `Бой останавливается, так ничем и не закончившись. Немброни отступает на шаг, изучая вас с иным вниманием, чем прежде. "Вы пришли сюда не для того, чтобы действительно меня убить," — говорит он не вопросом. "Вы пришли посмотреть, был ли я прав." Он опускает руки. "Тогда давайте поговорим по-настоящему, без боевой части."

Настало время по-настоящему решить, что вы будете делать с тем, что бы вы сейчас ни чувствовали.`;
      }
      return `Ни один из вас не получает явного преимущества. Немброни отступает в тени в глубине комнаты, и на мгновение кажется, что он вот-вот исчезнет вовсе. "Вы не заслуживаете умереть здесь," — говорит он с холодностью, не допускающей возражений. "Но и победить сегодня вы не заслуживаете."

Прежде чем вы успеваете отреагировать, его уже нет.`;
    },

    final_trágico_check_tentado: (character, flags) => {
      if (flags?.nembrini_tentado) {
        return `Бой останавливается, так ничем и не закончившись. Немброни отступает на шаг, изучая вас с иным вниманием, чем прежде. "Вы пришли сюда не для того, чтобы действительно меня убить," — говорит он не вопросом. "Вы пришли посмотреть, был ли я прав." Он опускает руки. "Тогда давайте поговорим по-настоящему, без боевой части."

Немброни ждёт вашего ответа с терпением, которое не кажется наигранным. Он не давит. Он просто знает, что бы вы ни решили, решение целиком за вами.`;
      }
      return `Ни один из вас не получает явного преимущества. Немброни отступает в тени в глубине комнаты, со спокойствием того, кто не считает это поражением. "Вы не заслуживаете умереть здесь," — говорит он с холодностью, не допускающей возражений. "Но и победить сегодня вы не заслуживаете."

Прежде чем вы успеваете до конца отреагировать, его уже нет, и остаётся лишь уверенность, что это ещё не конец.`;
    },

    oferta_final: () => `Немброни ждёт вашего ответа с терпением, которое не кажется наигранным. Он не давит. Он просто знает, что бы вы ни решили, решение целиком за вами.`,

    final_leal_gate: () => `Немброни падает. Победа ясна, почти проста. Но прежде чем вы успеваете считать дело закрытым, что-то притягивает ваше внимание в другую сторону.`,

    final_pragmatico_gate: () => `Немброни падает, хотя и не так, чтобы это выдержало пристальный осмотр. У вас есть время подумать, что делать с произошедшим этой ночью, прежде чем кто-то ещё доберётся до места событий.`,

    final_leal: () => `Немброни падает, а вместе с ним и тяжесть всех ночей, что город провёл в страхе, не зная почему. Это не чистая и не лёгкая победа, но настоящая.

Когда вы возвращаетесь в Эклипс, Селена ждёт вас с выражением, которого вы у неё раньше не видели: чем-то похожим на искреннее облегчение. "Принц хочет вас видеть," — говорит она. "И это не та встреча, которую большинство новообращённых получают на первой неделе."

Принц оказывается именно тем, кого вы ожидали, и совсем не тем, кого представляли: присутствием, заполняющим комнату без необходимости повышать голос. "Вы сделали то, что не удалось Каинитам с вековым опытом," — говорит он без лишних церемоний. "Это не забывается в этом городе. Как и то, на что вы способны. Отныне я буду наблюдать за вами с той же осторожностью, с какой наблюдаю за теми, кто беспокоит меня больше всего."

Вы получаете место в каинитском обществе города, признанное и уважаемое. Вы также получаете, навсегда, постоянное внимание того, кто никогда не перестаёт наблюдать. В Мире Тьмы редко удаётся получить одно без другого.`,

    final_pragmatico: () => `Немброни падает, хотя и не так, чтобы это выдержало пристальный осмотр, если кто-то потрудится присмотреться. Прежде чем прибудет Стража Принца для осмотра места, у вас есть время решить, какую часть произошедшего этой ночью вы расскажете, а какую оставите при себе.

Селена выслушивает вашу отредактированную версию событий с чуть приподнятой бровью — единственный знак того, что она понимает: рассказано не всё. Она ничего не говорит по этому поводу. Некоторые вещи, как она усвоила, лучше не спрашивать.

Принц удовлетворён тем, как разрешилось дело. Вы получаете вознаграждение, признанное место в городе и прочную репутацию человека способного. Никто не знает, что вы также сохранили некоторое влияние, которого официально не должно существовать: контакты, которые были у Немброни, информацию, которую вы решили не передавать полностью. В этом городе знание, о котором никто не знает, что оно у вас есть, стоит больше любой официальной услуги.`,

    final_rebelde: () => `"Хорошо," — говорит Немброни, и впервые с тех пор, как вы его знаете, его спокойствие кажется искренне удовлетворённым, а не просто контролируемым. "Тогда начнём по-настоящему."

Нет никакой церемонии, никакой торжественной речи приветствия. Только странно спокойное ощущение принятого решения, которое уже нельзя отменить. В последующие ночи Немброни учит вас иначе понимать то, чем вы стали: без иерархий, которые вы едва начали изучать, без власти Принца, который никогда не спрашивал, хотите ли вы этого.

Селена больше не приходит за вами. Вероятно, она уже поняла, что произошло, и мудро решила, что преследовать того, кто выбрал этот путь, — не та битва, которую стоит вести. Город продолжает вращаться без вас на своём официальном радаре.

Вы начинаете свой собственный путь, свободный от чьего-либо контроля, кроме собственного, с Немброни как единственным наставником, которого вы решили принять. Вы пока не знаете, делает ли это вас лучше или просто другим. Возможно, в Мире Тьмы это различие никогда не имело такого значения, как все притворяются.`,

    final_tragico: () => `Этой ночью нет победы, нет даже такого поражения, о котором потом можно рассказать с некоторой гордостью. Немброни исчез, и с вами остаётся лишь уверенность, что вы провалили единственное, о чём вас просил Принц.

Когда вы возвращаетесь в Эклипс, Селена долго молчит. В её молчании нет упрёка, что каким-то образом хуже, чем если бы он был. "Он появится снова," — говорит она наконец. "Такие, как он, не сдаются только потому, что кто-то однажды попытался."

Принц не даёт вам второй аудиенции. Город продолжает жить своей жизнью, а Немброни всё ещё где-то там, ожидая следующего хода. Ваше имя не произносят с презрением, но и без какого-либо признания тоже. Для каинитского общества этого города вы просто тот, кто попытался и не справился. Иногда это единственная правда, которая остаётся.`,

    final_secreto: () => `Что-то не сходится до конца, даже после того как всё остальное разрешилось. Вы возвращаетесь, почти не решая этого сознательно, в то самое место, где всё началось: в подсобку Эклипса, где ваш Сир дал вам Объятие, почти ничего не объяснив о том, что это значит.

На этот раз фигура не остаётся размытой. Вы видите её ясно впервые, и в её выражении вы сразу узнаёте кое-что: то же расчётливое спокойствие, что вы видели у Немброни. "Вы знали, что происходит," — говорите вы не вопросом. "С самого начала."

Ваш Сир этого не отрицает. "Я знал, что что-то происходит," — признаёт он. "Не до какой степени. Но мне нужен был кто-то новый, без истории, чтобы расследовать это. Кто-то, кого никто не свяжет со мной." Пауза. "В итоге я выбрал правильно."

Откровение усваивается медленно, задним числом меняя смысл каждого решения, принятого вами с той первой ночи. Вас обратили не просто из срочной необходимости. Вас обратили как инструмент, тщательно выбранный для цели, которую вам так и не удосужились объяснить.

Что вы будете делать с этой информацией, теперь, когда она у вас есть, — вопрос, на который предстоит ответить вам самим. Эта история, по крайней мере эта её часть, подошла к концу. Но очевидно, это не единственный открытый вопрос в Валдрисе... или там, куда вы решите отправиться дальше.`,

    choices: {
      convergencia_investigacion: [
        '"Поищу других Каинитов, знавших Маркуса."',
        '"Обыщу место, где он исчез."',
        '"Использую свои связи среди смертных, не раскрывая, кто я."',
      ],
      convergencia_almacen: [
        '"Вхожу тихо, чтобы никто не заметил."',
        '"Вхожу силой, напрямую."',
        '"Сначала предупреждаю Принца."',
      ],
      convergencia_testigo: [
        '"Говорю с ним спокойно, пытаясь заслужить доверие."',
        '"Давлю напрямую. Нет времени на деликатность."',
        '"Проникаю в его надломленный разум, чтобы увидеть то, что видел он."',
      ],

            nembrini_encuentro: [
        '"Послушаю. Но это ничего не изменит."',
        '"Действительно послушаю. Убедите меня."',
        '"Я пришёл не разговаривать."',
      ],
      oferta_final: [
        '"Присоединяйся ко мне. Позволь показать, что это на самом деле значит."',
        '"Нет. Я остановлю тебя, даже если это последнее, что я сделаю."',
      ],
      final_trágico_check_tentado: [
        '"Присоединяйся ко мне. Позволь показать, что это на самом деле значит."',
        '"Нет. Я остановлю тебя, даже если это последнее, что я сделаю."',
        '"Я с тобой ещё не закончил."',
      ],
      final_leal_gate: [
        '"Прежде всего... мне нужно кое-что проверить самому."',
        '"Пора сообщить Принцу о случившемся."',
      ],
      final_pragmatico_gate: [
        '"Прежде всего... мне нужно кое-что проверить самому."',
        '"Решу, какую именно часть этого рассказать."',
      ],
    },

  },

};