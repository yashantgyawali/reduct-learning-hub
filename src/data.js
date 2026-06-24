export const STAGES = [
  {
    id: 1,
    title: "Probable Cause Hearing",
    desc: "Discovery drops the night before. Get the shape of the story before tomorrow's hearing.",
    scenarios: [
      {
        id: 1,
        title: "I got discovery the night before the hearing.",
        situation:
          "You just got the case, and the discovery dropped just now. The probable cause hearing is tomorrow morning. You have hours of footage and just a night to prepare, so watching everything isn't an option. You need to know what happened, fast, so you can question the officer.\n\nYou can read through the main documents, like police reports and affidavits, but they tell the side of the story that played out perfectly for them. The main job is to find contradictions and ask good questions that will make the officer uncomfortable and lock them into a story on the record on day one of the case. And you need the shape of the story before you can ask good questions.\n\nHowever, with so much discovery and a night to prepare, it's practically impossible.\n\nIdeally, it would be nice to walk into probable cause with a specific, chronological event list and a good mental note of what exactly happened. And even better if you can have a good list of questions to ask the officer.\n\nAnd Reduct helps you do just that.",
        problem: "",
        helps: [
          { head: "Upload your discovery" },
          "Throw all your discovery to Reduct. Even better if we can work with your IT department to set up integrations with your case management system, so that everything that comes to your case management system or your cloud storage solution can automatically come in to Reduct.",
          { head: "Keyword Search" },
          "Quickly read what's in the Gerstein affidavit (statement of probable cause by the officer) to check out their story. And run fuzzy search with similar search keywords to find similar instances across the discovery files (including 911 calls, body-cam, and other files).",
          { head: "Run a batch summary" },
          "With all your files in a single cloud platform, you can run a batch summary with targeted questions that are relevant for a probable cause hearing. The goal of a batch summary is not deep analysis, but rather fast orientation.",
          "You want to know the shape of the case before you walk in.",
          { head: "Custom question template" },
          "Instead of using a generic sumamary, you'd want your summaries to be organized by what you are trying to find out. So you can use a custom question template (for probable cause hearings) to get a headstart.",
          [
            "What was the stated reason for the stop, approach, or arrest?",
            "What specific facts does this file state as justification for probable cause?",
            "What sequence of events does this file describe?",
            "What did the officer claim to observe directly?",
            "What statements did the suspect make?",
            "What statements did any witnesses make?",
            "Did anyone invoke their right to remain silent or ask for a lawyer?",
            "Are there any qualifications, uncertainties, or contradictions stated?",
            "What is the most specific factual claim made in this file?",
          ],
          "Use the generated summary as your map and not as the record of what happened. The summary is just like a table of contents, which lets you click on it and take you to the right moment in the video or document. With this, you will have a better idea of what happened, who said what, and what to ask the officer tomorrow.",
          "It will be important to ask very targeted questions and lock in the police side story on this day.",
          "Later, when you're in the hearing, you can check the officer's live testimony against all the discovery to find contradictions. It's even better to invite relevant people to the project, add tags, and comments to the parts that will be relevant for later.",
        ],
        features: [
          "Upload",
          "Keyword Search",
          "Batch Summarize",
          "Custom Summary",
          "Collaboration in Reduct",
        ],
        outcome: "",
        faqs: [
          {
            q: "With all the AI hallucination, how good is the summary? I could never trust it.",
            a: "A summary should never be treated as the record of what happened. You will need to think of it as a table of contents (but on things that you care about). So for every question you put in, you get the answers with a clickable timestamp that takes you to that moment that generated the summary. So, skim the summary, find the answer that you care about, click on the link, and read the actual transcript or the document.",
          },
        ],
      },
      {
        id: 2,
        title:
          "Does the body-cam match the officer's statement in the affidavit?",
        situation:
          "You have the Gerstein affidavit — the officer's written statement of probable cause. You want to check whether what they wrote matches what's actually on the body-cam.",
        problem:
          "Manually cross-referencing a written affidavit with hours of video is tedious. You're looking for specific moments — but you don't know exactly where they are.",
        helps: [
          { head: "Cross-reference the affidavit" },
          "Take the key claims from the affidavit and run keyword searches in Reduct against your transcribed body-cam footage. Reduct surfaces the exact moments where those words (or related words) appear. You can jump straight to that moment in the video, watch it, and decide if the story holds up.",
        ],
        features: ["Keyword Search", "Fuzzy Search", "Transcript Navigation"],
        outcome:
          "In 15 minutes, you've cross-referenced the affidavit against the footage. If there's a contradiction, you've found it. If it holds up, you know that too. Either way, you're asking sharper questions tomorrow.",
      },
    ],
  },
  {
    id: 2,
    title: "Defense Investigation",
    desc: "Find missing footage and extract what's useful from witness recordings.",
    scenarios: [
      {
        id: 1,
        title: "I need to figure out what footage we might be missing.",
        situation:
          "You're watching body-cam to build your defense investigation. You need to figure out if there are other cameras — storefronts, Ring doorbells, traffic cams — that may have captured the incident. If so, you need to act fast before that footage gets deleted.",
        problem:
          "You're watching video while also trying to mentally map the physical scene. It's easy to miss things. And there's no good way to flag what you see for your investigator without writing it all down separately.",
        helps:
          "As you watch the body-cam in Reduct, add a comment or tag at any moment where you spot a potential camera — a store sign, a private property notice, a doorbell camera in the frame. These timestamped comments become a to-do list for your investigator. Export or share the clip with the comment directly.",
        features: ["Comments", "Tags", "Clip Export", "Share"],
        outcome:
          "Your investigator gets a precise, timestamped list of locations to chase — not a vague verbal briefing. You haven't missed anything obvious. You've done this in one pass of the footage.",
      },
      {
        id: 2,
        title: "We recorded a witness interview. Now we need to use it.",
        situation:
          "After your first unrecorded conversation with a witness, you conducted a second recorded interview — focused on what's actually useful to your case. Now you need to extract the key statements from that recording.",
        problem:
          "Recorded witness interviews are valuable, but only if you can find the good parts. Scrubbing through an hour-long recording to find three key statements is slow. And hand-transcribing those statements into your notes is even slower.",
        helps:
          "Upload the witness recording to Reduct. The transcript surfaces immediately. Search for key terms, jump to the relevant moments, and tag or clip the statements that matter. Pull those clips into a reel or export the timestamped transcript to feed directly into your case notes.",
        features: [
          "Upload",
          "Transcription",
          "Keyword Search",
          "Tags",
          "Clips",
          "Reel",
        ],
        outcome:
          "The strongest parts of the witness interview are clipped and ready. You have a timestamped record of what was said and when. Nothing gets buried in a long recording.",
      },
    ],
  },
  {
    id: 3,
    title: "Discovery Review",
    desc: "Get oriented in what you have, triage what matters, and surface what's missing.",
    scenarios: [
      {
        id: 1,
        title: "I haven't even looked at what I have yet.",
        situation:
          "You're seeing the client tomorrow. You haven't reviewed any of the discovery. You're not even sure what footage you have.",
        problem:
          "Starting from zero is disorienting. You don't want to walk into a client meeting blind — but you also can't spend 6 hours watching everything before tomorrow.",
        helps:
          "Upload your discovery to Reduct and run batch summaries across all your files. Within a short window you have an overview of each recording — who's in it, what stage of the incident it covers, roughly what happened. Use this as your orientation map before diving deeper.",
        features: ["Upload", "Batch Summarize", "Project View"],
        outcome:
          "You know what you have. You know what you're missing. You can walk into the client meeting informed — and you can tell your investigator exactly what else to go collect.",
      },
      {
        id: 2,
        title:
          "I have 12 body-cam files. I don't know which one to start with.",
        situation:
          "You're in discovery review. You have footage from multiple officers and you need to figure out which video captures the most of the incident — so you can watch that one first and use the others to fill in gaps.",
        problem:
          "Watching 12 videos sequentially takes all day. You need a way to triage before you commit your time.",
        helps:
          "Use Reduct's timeline view to see how all your recordings map against each other chronologically. At a glance, you can see which officer's footage covers the longest window, which ones overlap, and where there are gaps. Then switch to multi-cam to watch the most relevant footage together instead of one at a time.",
        features: ["Timeline", "Multi-Cam View"],
        outcome:
          "You spend 20 minutes triaging instead of 6 hours watching. You start with the footage that matters most. You use the others for peripheral awareness — context, not the main focus.",
      },
      {
        id: 3,
        title: "The body-cam is in Spanish. I speak English.",
        situation:
          "Your client and the key witness on the body-cam speak Spanish. You don't. You need to know whether this is a significant issue in the case before you decide whether to invest in a certified translation.",
        problem:
          "Getting a certified translation takes weeks and costs real money. But you can't make a decision about a recording you can't understand.",
        helps:
          "Run Reduct's AI translation on the recording. You get a working transcript in English — not certified, but enough to understand what's being said. Now you can assess whether the content matters enough to pursue a certified translation, or flag specific moments that need closer attention.",
        features: ["Translation", "Transcription", "Keyword Search"],
        outcome:
          "You understand the gist of the recording within the hour. You can make an informed call on whether to invest in certified translation. You're not flying blind — and you're not waiting weeks to find out if it matters.",
      },
      {
        id: 4,
        title: "I got a dump of 30 jail calls.",
        situation:
          "The prosecution dropped 30 jail calls in discovery. You need to know what's in them — especially anything your client said that could hurt the case — before the DA uses it against you.",
        problem:
          "Listening to 30 calls manually takes a full day. You need to know what's in there, fast, without listening to everything.",
        helps:
          "Upload the jail calls to Reduct and batch transcribe. Then search across all 30 calls at once for key terms — names, dates, specific incidents. Reduct surfaces the moments that matter. You can listen to those clips, ignore the noise, and know what you're dealing with before the DA does.",
        features: [
          "Batch Transcription",
          "Batch Summarize",
          "Keyword Search",
          "Search Across Project",
        ],
        outcome:
          "You've reviewed 30 calls without listening to 30 calls. You know what's in there. You know what the DA might use. And you found it faster than they expect you to.",
      },
      {
        id: 5,
        title:
          "I think I'm missing a body-cam. I need to figure out which officer it belongs to.",
        situation:
          "You have footage from multiple officers, but something feels off. You think there's a recording that wasn't produced. You need to figure out which officer corresponds to which camera — so you can formally request what you're missing.",
        problem:
          "Matching officers to body-cam files is tedious. Audit logs help but they take time to work through.",
        helps:
          "Use Reduct's multi-cam view and audit log tools to reconcile officers against footage. Lay them out together. Cross-reference names mentioned in transcripts, badge numbers, and filing metadata. Build a map of who has footage and who doesn't.",
        features: [
          "Multi-Cam View",
          "Audit Logs",
          "Keyword Search",
          "Timeline",
        ],
        outcome:
          "You know exactly which officer is missing. You have a clear basis for your formal request. You look more prepared than the prosecution expects.",
      },
    ],
  },
  {
    id: 4,
    title: "Plea Negotiations",
    desc: "Show clients what the prosecution actually has. Handle night-before evidence drops.",
    scenarios: [
      {
        id: 1,
        title: "My client doesn't believe the evidence is as bad as it is.",
        situation:
          "Your case is weak, but your client is convinced they can fight it. Part of your job right now is showing them what the prosecution actually has — so they can make a realistic decision about the plea offer.",
        problem:
          "Telling a client the evidence is bad isn't enough. They need to see it. But walking them through hours of footage in a visit isn't practical.",
        helps:
          "Build a reel in Reduct of the most damaging moments from the body-cam. Keep it short — 5 to 10 minutes of the specific clips that show the strongest parts of the prosecution's case. Use multi-cam view to show the same moment from multiple officers' angles. Share the reel or bring it into the client meeting.",
        features: ["Reel", "Multi-Cam View", "Clips", "Share"],
        outcome:
          "Your client has seen the evidence — not heard about it. The conversation shifts. They're more likely to engage seriously with the plea offer, and they trust that you've actually done the work.",
      },
      {
        id: 2,
        title: "A better plea offer just came in the night before trial.",
        situation:
          "The prosecution dropped new evidence and a revised plea offer the night before trial. You need to assess the new material fast and advise your client.",
        problem:
          "Night-before dumps are designed to overwhelm. You don't have time for a full review.",
        helps:
          "Upload the new discovery immediately. Run a summary to get the shape of it fast. Search for the key terms you already know matter — the officer's name, the location, the specific incident. Focus your attention on what's actually new, not what you've already seen.",
        features: ["Upload", "Batch Summarize", "Keyword Search"],
        outcome:
          "You understand the new material within the hour. You can give your client an informed recommendation before morning. You're not making a call in the dark.",
      },
    ],
  },
  {
    id: 5,
    title: "Trial Prep",
    desc: "Build cross-examinations, stress-test arguments, and get experts up to speed.",
    scenarios: [
      {
        id: 1,
        title:
          "I need to prep a cross for every officer with body-cam. That's four officers.",
        situation:
          "You're in the last two weeks before trial. You need to build a cross-examination for each officer — chapter by chapter, with clips ready for every moment you plan to impeach them.",
        problem:
          "This is the most time-intensive part of trial prep. You're watching all the footage again, pulling timestamps, building the cross structure, and saving individual clips to reference in court. Without a system, it's chaos.",
        helps:
          "Watch all body-cam again in multi-cam. Download the transcript for each officer. Structure your cross directly from the timestamped transcript — each chapter maps to a moment, each impeachment point links to a clip. Name your clips systematically (e.g., A-1.mp4, A-2.mp4) and embed those filenames directly into your cross prep document. If a transcript moment needs to be corrected, fix it before you build around it.",
        features: [
          "Multi-Cam View",
          "Transcript Download",
          "Clips",
          "Re-Transcribe",
          "Tags as Chapters",
        ],
        outcome:
          "Your cross is built on the officer's own words, with timestamped evidence behind every chapter. Your impeachment clips are organized and named. You don't have to scramble for anything in the courtroom.",
      },
      {
        id: 2,
        title:
          "I want to make sure my argument holds before I make it in court.",
        situation:
          "You've built your argument. But before you commit to it in front of a judge, you want to stress-test it. Your theory depends on no one having said a certain word or phrase. You need to verify that.",
        problem:
          "Confidence based on memory isn't good enough. You need to actually check.",
        helps:
          "Run a fuzzy keyword search across all your discovery in Reduct. Search for the term, the concept, and related words. If it's not there, you know. If it is there, you've just caught something that could have blown your case.",
        features: ["Fuzzy Search", "Search Across Project", "Keyword Search"],
        outcome:
          "Your argument is airtight — or you've found the hole before the DA did. Either way, you're better prepared than you would have been.",
      },
      {
        id: 3,
        title:
          "I need to share the relevant footage with an expert witness before trial.",
        situation:
          "You're calling an expert — a psychologist, a ballistics specialist, a surveillance custodian. They need to review specific footage before they testify. You don't want to send them 4 hours of video and hope they find the right 90 seconds.",
        problem:
          "Getting experts up to speed is time-consuming. Sending full discovery is impractical. And the expert's time is expensive.",
        helps:
          "Build a reel in Reduct with only the clips that are relevant to what the expert needs to review. Add a comment with context for each clip. Share via link. They watch exactly what matters, nothing more.",
        features: ["Reel", "Clips", "Comments", "Share Link"],
        outcome:
          "Your expert reviews the right footage in a fraction of the time. Their prep is focused. When they testify, they're talking about the exact moments you need them to address.",
      },
      {
        id: 4,
        title:
          "There's sensitive information in this footage that needs to be redacted before sharing.",
        situation:
          "You're preparing clips or reels to share — with an expert, a co-counsel, or for court. But the footage contains sensitive information (a Social Security card in frame, an unrelated witness's face) that shouldn't go out.",
        problem:
          "Redacting video manually is painful. And forgetting to redact before sharing creates real risk.",
        helps:
          "Use Reduct's redaction tools to blur sensitive elements before exporting or sharing. Mark what needs to be struck or blurred, apply it to the clip or reel, and share the clean version.",
        features: ["Redact", "Reel", "Clips", "Share"],
        outcome:
          "You share only what you intend to share. Sensitive information stays protected. No scrambling after the fact.",
      },
    ],
  },
  {
    id: 6,
    title: "Sentencing & Mitigation",
    desc: "Compile humanizing moments from scattered recordings into a focused mitigation package.",
    scenarios: [
      {
        id: 1,
        title:
          "I need to build a mitigation package for the sentencing hearing.",
        situation:
          "Your client is headed to sentencing. You want to put together a compelling package — the most humanizing moments from client interviews, social worker conversations, and any relevant footage — to present to the judge.",
        problem:
          "The material is scattered across multiple recordings. Finding the right moments and compiling them into something coherent takes hours.",
        helps:
          "Upload all your interview and relevant footage to a project in Reduct. Tag the moments that are most human — a moment of clarity, an expression of accountability, a social worker's observation. Build a reel from those tagged moments. Add captions so the content lands even without audio.",
        features: ["Tags", "Reel", "Clips", "Captions", "Project"],
        outcome:
          "You walk into sentencing with a tightly edited mitigation package — not a raw dump of footage. The judge sees the moments you want them to see, in the order you want them to see it.",
      },
    ],
  },
  {
    id: 7,
    title: "General & Collaboration",
    desc: "Get co-counsel up to speed and answer client questions without scrubbing hours of footage.",
    scenarios: [
      {
        id: 1,
        title:
          "A colleague is co-counseling with me. They need to get up to speed.",
        situation:
          "You're co-counseling on a case with a colleague or supervisor. They're coming in mid-stream and need to understand what you have, what you've found, and where you are.",
        problem:
          "Briefing someone from scratch takes time. Sharing raw discovery with them is no better — they're starting from zero.",
        helps:
          "Share the Reduct project with your co-counsel. Your comments, tags, and clips are already in there — it's a working record of what you've noticed. They can read your annotations, watch the flagged moments, and come up to speed in a fraction of the time a verbal briefing would take.",
        features: ["Share", "Comments", "Tags", "Clips", "Project"],
        outcome:
          "Your co-counsel is oriented within an hour. They're not starting from zero — they're starting from where you left off. The collaboration happens in the footage, not in a separate meeting about the footage.",
      },
      {
        id: 2,
        title:
          "My client is asking me a specific question and I need to check the discovery to answer it.",
        situation:
          "You're in a call or visit with your client and they ask about a specific detail — something someone said, whether something was on camera, a timeline question. You need to find the answer in your discovery.",
        problem:
          "You can't put a client on hold and scrub through hours of footage. You need to find the answer fast.",
        helps:
          "Open the project in Reduct and run a search — a keyword, a phrase, a name. Reduct surfaces the exact moments across all your recordings where that thing comes up. You find the answer in seconds, not hours.",
        features: [
          "Keyword Search",
          "Search Across Project",
          "Ask a Recording",
        ],
        outcome:
          "You answer your client accurately, in real time. They see that you know the case. Trust goes up.",
      },
    ],
  },
];

export const _D =
  "https://drive.google.com/drive/folders/1u_AMzNkSWsZqe-smsi0f4Bn33mc3EbsR";

export const FEATURE_LINKS = {
  Upload: "https://help.reduct.video/en/articles/upload-files-into-reduct",
  Search:
    "https://help.reduct.video/en/articles/search-for-words-and-phrases-in-recordings",
  "Batch Summarize":
    "https://help.reduct.video/en/articles/ai-summaries#batch-summarize",
  "Custom Summary":
    "https://help.reduct.video/en/articles/ai-summaries#get-a-custom-summary-of-your-recording",
  "Collaboration in Reduct":
    "https://help.reduct.video/en/articles/collaboration-in-reduct",
  "Summary Review": _D,
  "Keyword Search":
    "https://help.reduct.video/en/articles/search-for-words-and-phrases-in-recordings",
  "Fuzzy Search": _D,
  "Transcript Navigation": _D,
  Comments: _D,
  Tags: _D,
  "Clip Export": _D,
  Share: _D,
  Transcription: _D,
  Clips: _D,
  Reel: _D,
  "Project View": _D,
  Timeline: _D,
  "Multi-Cam View": _D,
  Translation: _D,
  "Batch Transcription": _D,
  "Search Across Project": _D,
  "Audit Logs": _D,
  "Share Link": _D,
  Redact: _D,
  "Transcript Download": _D,
  "Re-Transcribe": _D,
  "Tags as Chapters": _D,
  Captions: _D,
  Project: _D,
  "Ask a Recording": _D,
};
