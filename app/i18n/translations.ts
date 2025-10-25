export type Language = 'en' | 'bg' | 'ru';

export interface Translations {
  // Common
  languageName: string;
  
  // Step 1: Primary Emotion Picker
  step1: {
    title: string;
    subtitle: string;
    footerHint: string;
    emotions: {
      happy: string;
      sad: string;
      mad: string;
      worried: string;
      tired: string;
      confused: string;
      frustrated: string;
      numb: string;
    };
  };
  
  // Step 2: Intensity Slider
  step2: {
    title: string;
    subtitle: string;
    intensityLabels: {
      small: string;
      medium: string;
      huge: string;
    };
    continueButton: string;
    backButton: string;
  };

  // Step 3: Secondary Emotions
  step3: {
    title: string;
    subtitle: string;
    continueButton: string;
    backButton: string;
    skipButton: string;
    secondaryEmotions: {
      // Sad
      lonely: { label: string; description: string };
      letDown: { label: string; description: string };
      leftOut: { label: string; description: string };
      hurt: { label: string; description: string };
      missingSomeone: { label: string; description: string };
      // Mad
      annoyed: { label: string; description: string };
      notFair: { label: string; description: string };
      jealous: { label: string; description: string };
      disrespected: { label: string; description: string };
      protective: { label: string; description: string };
      // Worried
      nervous: { label: string; description: string };
      tooMuch: { label: string; description: string };
      embarrassed: { label: string; description: string };
      scared: { label: string; description: string };
      worriedMessedUp: { label: string; description: string };
      // Happy
      excited: { label: string; description: string };
      relieved: { label: string; description: string };
      loved: { label: string; description: string };
      proud: { label: string; description: string };
      surprisedGood: { label: string; description: string };
      // Tired
      exhausted: { label: string; description: string };
      bored: { label: string; description: string };
      burnedOut: { label: string; description: string };
      doneWithToday: { label: string; description: string };
      needBreak: { label: string; description: string };
      // Confused
      dontGetIt: { label: string; description: string };
      mixedUp: { label: string; description: string };
      stuck: { label: string; description: string };
      foggy: { label: string; description: string };
      surprisedConfused: { label: string; description: string };
      // Frustrated
      cantDoIt: { label: string; description: string };
      keepTrying: { label: string; description: string };
      runningOutOfTime: { label: string; description: string };
      blocked: { label: string; description: string };
      nobodyUnderstands: { label: string; description: string };
      // Numb
      justMeh: { label: string; description: string };
      disconnected: { label: string; description: string };
      spacedOut: { label: string; description: string };
      dontWantToTalk: { label: string; description: string };
      whatever: { label: string; description: string };
    };
    unsure: { label: string; description: string };
  };

  // Step 4: Context Selection
  step4: {
    title: string;
    subtitle: string;
    continueButton: string;
    backButton: string;
    contexts: {
      friends: { label: string; description: string };
      family: { label: string; description: string };
      school: { label: string; description: string };
      somethingSaid: { label: string; description: string };
      somethingHappened: { label: string; description: string };
      myBody: { label: string; description: string };
      online: { label: string; description: string };
      justFeeling: { label: string; description: string };
    };
  };

  // Step 5: Chat Interface
  step5: {
    title: string;
    placeholder: string;
    sendButton: string;
    backButton: string;
    shareButton: string;
    shareConfirm: string;
    thinking: string;
    crisisResources: {
      title: string;
      message: string;
      hotline: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    languageName: 'English',
    step1: {
      title: 'How does your face feel right now?',
      subtitle: 'Pick the emoji that shows how you feel',
      footerHint: "Take your time • There's no wrong answer 💜",
      emotions: {
        happy: 'Happy/Good',
        sad: 'Sad',
        mad: 'Mad/Angry',
        worried: 'Worried/Scared',
        tired: 'Tired/Drained',
        confused: 'Confused',
        frustrated: 'Frustrated',
        numb: 'Numb/Blank',
      },
    },
    step2: {
      title: 'How BIG is this feeling?',
      subtitle: 'Move the slider to show how strong it feels',
      intensityLabels: {
        small: 'Small',
        medium: 'Medium',
        huge: 'HUGE',
      },
      continueButton: 'Continue',
      backButton: 'Back',
    },
    step3: {
      title: 'What kind of feeling is it?',
      subtitle: 'Pick the one that fits best',
      continueButton: 'Continue',
      backButton: 'Back',
      skipButton: 'Skip this',
      secondaryEmotions: {
        lonely: { label: 'Lonely', description: "Like nobody's around" },
        letDown: { label: 'Let down', description: "Things didn't go how I wanted" },
        leftOut: { label: 'Left out', description: "Everyone else is included but not me" },
        hurt: { label: 'Hurt', description: 'Someone made me feel bad' },
        missingSomeone: { label: 'Missing someone', description: 'Wish someone was here' },
        annoyed: { label: 'Annoyed', description: 'Someone keeps bugging me' },
        notFair: { label: 'Not fair', description: "I'm getting treated badly" },
        jealous: { label: 'Jealous', description: 'Someone has something I want' },
        disrespected: { label: 'Disrespected', description: "Nobody's listening to me" },
        protective: { label: 'Protective', description: 'Someone messed with my stuff or people I care about' },
        nervous: { label: 'Nervous', description: "Something's coming and I'm scared" },
        tooMuch: { label: 'Too much', description: 'Everything feels like a lot' },
        embarrassed: { label: 'Embarrassed', description: 'I think people are judging me' },
        scared: { label: 'Scared', description: "I don't feel safe" },
        worriedMessedUp: { label: 'Worried I messed up', description: 'I think I did something wrong' },
        excited: { label: 'Excited', description: "Can't wait for something!" },
        relieved: { label: 'Relieved', description: 'Something bad is over' },
        loved: { label: 'Loved', description: 'People care about me' },
        proud: { label: 'Proud', description: 'I did something awesome' },
        surprisedGood: { label: 'Surprised (good way)', description: 'Something cool happened' },
        exhausted: { label: 'Exhausted', description: 'No energy left' },
        bored: { label: 'Bored', description: "Nothing's interesting" },
        burnedOut: { label: 'Burned out', description: "I've been trying too hard" },
        doneWithToday: { label: 'Done with today', description: 'Just want this day to be over' },
        needBreak: { label: 'Need a break', description: 'Too much stuff happening' },
        dontGetIt: { label: "Don't get it", description: "Something doesn't make sense" },
        mixedUp: { label: 'Mixed up', description: "I'm not sure what I think" },
        stuck: { label: 'Stuck', description: "Don't know what to do" },
        foggy: { label: 'Foggy', description: "Can't think clearly" },
        surprisedConfused: { label: 'Surprised (confused way)', description: 'That was unexpected and weird' },
        cantDoIt: { label: "Can't do it", description: 'This is too hard' },
        keepTrying: { label: 'Keep trying but failing', description: "Nothing's working" },
        runningOutOfTime: { label: 'Running out of time', description: 'Not enough time to finish' },
        blocked: { label: 'Blocked', description: "Something's in my way" },
        nobodyUnderstands: { label: 'Nobody understands', description: "Can't explain what I need" },
        justMeh: { label: 'Just... meh', description: "Don't really feel anything" },
        disconnected: { label: 'Disconnected', description: "Like I'm watching from far away" },
        spacedOut: { label: 'Spaced out', description: 'Brain is somewhere else' },
        dontWantToTalk: { label: "Don't want to talk", description: 'Just want quiet' },
        whatever: { label: 'Whatever', description: "Don't care right now" },
      },
      unsure: { label: 'Not sure', description: "I can't quite pin it down" },
    },
    step4: {
      title: 'Where did this feeling start?',
      subtitle: 'Pick what makes the most sense',
      continueButton: 'Continue',
      backButton: 'Back',
      contexts: {
        friends: { label: 'Friends', description: 'Something with my friends' },
        family: { label: 'Family', description: 'Something at home' },
        school: { label: 'School/Homework', description: 'Something about school or work I have to do' },
        somethingSaid: { label: 'Something someone said', description: 'Words that bothered me' },
        somethingHappened: { label: 'Something just happened', description: 'A specific thing just occurred' },
        myBody: { label: 'My body', description: 'Tired, hungry, sick, or just physical stuff' },
        online: { label: 'Something online', description: 'Something I saw or that happened online' },
        justFeeling: { label: 'Just feeling this way', description: "Don't really know why" },
      },
    },
    step5: {
      title: "Let's figure this out together",
      placeholder: 'Type how you feel...',
      sendButton: 'Send',
      backButton: 'Back',
      shareButton: 'Share with Parent',
      shareConfirm: 'Summary copied! You can paste it to share with a trusted adult.',
      thinking: 'Thinking...',
      crisisResources: {
        title: 'You might need extra help',
        message: "It sounds like you're going through something really tough. Please talk to a trusted adult or call:",
        hotline: 'Crisis Hotline: 988 (US) or your local emergency number',
      },
    },
  },
  bg: {
    languageName: 'Български',
    step1: {
      title: 'Как се чувства лицето ти сега?',
      subtitle: 'Избери емоджито, което показва как се чувстваш',
      footerHint: 'Вземи си време • Няма грешен отговор 💜',
      emotions: {
        happy: 'Щастлив/Добре',
        sad: 'Тъжен',
        mad: 'Ядосан',
        worried: 'Притеснен/Уплашен',
        tired: 'Уморен/Изтощен',
        confused: 'Объркан',
        frustrated: 'Фрустриран',
        numb: 'Изтръпнал/Празен',
      },
    },
    step2: {
      title: 'Колко ГОЛЯМО е това чувство?',
      subtitle: 'Премести плъзгача, за да покажеш колко силно е',
      intensityLabels: {
        small: 'Малко',
        medium: 'Средно',
        huge: 'МНОГО ГОЛЯМО',
      },
      continueButton: 'Напред',
      backButton: 'Назад',
    },
    step3: {
      title: 'Какъв вид чувство е?',
      subtitle: 'Избери това, което най-добре пасва',
      continueButton: 'Напред',
      backButton: 'Назад',
      skipButton: 'Пропусни',
      secondaryEmotions: {
        lonely: { label: 'Самотен', description: 'Все едно няма никой наоколо' },
        letDown: { label: 'Разочарован', description: 'Нещата не се получиха както исках' },
        leftOut: { label: 'Изключен', description: 'Всички други са включени, но не и аз' },
        hurt: { label: 'Наранен', description: 'Някой ме накара да се чувствам зле' },
        missingSomeone: { label: 'Липсва ми някой', description: 'Искам някой да е тук' },
        annoyed: { label: 'Дразнещ', description: 'Някой продължава да ме дразни' },
        notFair: { label: 'Несправедливо', description: 'Отнасят се зле с мен' },
        jealous: { label: 'Ревнив', description: 'Някой има нещо, което аз искам' },
        disrespected: { label: 'Неуважаван', description: 'Никой не ме слуша' },
        protective: { label: 'Защитен', description: 'Някой се разправи с моите неща или хора, за които ми пука' },
        nervous: { label: 'Нервен', description: 'Идва нещо и ми е страшно' },
        tooMuch: { label: 'Твърде много', description: 'Всичко се усеща като много' },
        embarrassed: { label: 'Засрамен', description: 'Мисля, че хората ме съдят' },
        scared: { label: 'Уплашен', description: 'Не се чувствам в безопасност' },
        worriedMessedUp: { label: 'Притеснен, че съм сгрешил', description: 'Мисля, че съм направил нещо грешно' },
        excited: { label: 'Развълнуван', description: 'Не мога да чакам за нещо!' },
        relieved: { label: 'Облекчен', description: 'Нещо лошо свърши' },
        loved: { label: 'Обичан', description: 'Хората се грижат за мен' },
        proud: { label: 'Горд', description: 'Направих нещо страхотно' },
        surprisedGood: { label: 'Изненадан (по добър начин)', description: 'Случи се нещо готино' },
        exhausted: { label: 'Изтощен', description: 'Няма останала енергия' },
        bored: { label: 'Отегчен', description: 'Нищо не е интересно' },
        burnedOut: { label: 'Изгорял', description: 'Опитвах се твърде много' },
        doneWithToday: { label: 'Свърших с днес', description: 'Само искам този ден да приключи' },
        needBreak: { label: 'Нужда от почивка', description: 'Твърде много неща се случват' },
        dontGetIt: { label: 'Не разбирам', description: 'Нещо няма смисъл' },
        mixedUp: { label: 'Объркан', description: 'Не съм сигурен какво мисля' },
        stuck: { label: 'Блокиран', description: 'Не знам какво да правя' },
        foggy: { label: 'Мъглясво', description: 'Не мога да мисля ясно' },
        surprisedConfused: { label: 'Изненадан (объркан начин)', description: 'Това беше неочаквано и странно' },
        cantDoIt: { label: 'Не мога да го направя', description: 'Това е твърде трудно' },
        keepTrying: { label: 'Продължавам да се опитвам, но провалям се', description: 'Нищо не работи' },
        runningOutOfTime: { label: 'Времето свършва', description: 'Няма достатъчно време да завърша' },
        blocked: { label: 'Блокиран', description: 'Нещо ми пречи' },
        nobodyUnderstands: { label: 'Никой не разбира', description: 'Не мога да обясня какво ми трябва' },
        justMeh: { label: 'Просто... мех', description: 'Всъщност не чувствам нищо' },
        disconnected: { label: 'Изключен', description: 'Все едно гледам отдалеч' },
        spacedOut: { label: 'Замечтан', description: 'Мозъкът ми е другаде' },
        dontWantToTalk: { label: 'Не искам да говоря', description: 'Само искам тишина' },
        whatever: { label: 'Каквото и да е', description: 'Не ми пука сега' },
      },
      unsure: { label: 'Не съм сигурен', description: 'Не мога точно да го определя' },
    },
    step4: {
      title: 'Откъде започна това чувство?',
      subtitle: 'Избери това, което има най-голям смисъл',
      continueButton: 'Напред',
      backButton: 'Назад',
      contexts: {
        friends: { label: 'Приятели', description: 'Нещо с моите приятели' },
        family: { label: 'Семейство', description: 'Нещо у дома' },
        school: { label: 'Училище/Домашни', description: 'Нещо относно училище или работа, която трябва да свърша' },
        somethingSaid: { label: 'Нещо, което някой каза', description: 'Думи, които ме разстроиха' },
        somethingHappened: { label: 'Нещо току-що се случи', description: 'Конкретна случка току-що се случи' },
        myBody: { label: 'Моето тяло', description: 'Уморен, гладен, болен или просто физически неща' },
        online: { label: 'Нещо онлайн', description: 'Нещо, което видях или се случи онлайн' },
        justFeeling: { label: 'Просто се чувствам така', description: 'Не знам защо' },
      },
    },
    step5: {
      title: 'Нека да разберем заедно',
      placeholder: 'Напиши как се чувстваш...',
      sendButton: 'Изпрати',
      backButton: 'Назад',
      shareButton: 'Сподели с родител',
      shareConfirm: 'Резюмето е копирано! Можеш да го споделиш с възрастен, на когото имаш доверие.',
      thinking: 'Мисля...',
      crisisResources: {
        title: 'Може да ти трябва допълнителна помощ',
        message: 'Изглежда преминаваш през нещо наистина трудно. Моля, говори с възрастен, на когото имаш доверие, или се обади на:',
        hotline: 'Телефон за кризи: 116 123 (BG) или твоя местен спешен номер',
      },
    },
  },
  ru: {
    languageName: 'Русский',
    step1: {
      title: 'Как чувствует себя твоё лицо сейчас?',
      subtitle: 'Выбери эмодзи, который показывает, как ты себя чувствуешь',
      footerHint: 'Не торопись • Нет неправильных ответов 💜',
      emotions: {
        happy: 'Счастливый/Хорошо',
        sad: 'Грустный',
        mad: 'Злой/Сердитый',
        worried: 'Взволнованный/Испуганный',
        tired: 'Уставший/Истощённый',
        confused: 'Смущённый',
        frustrated: 'Расстроенный',
        numb: 'Онемевший/Пустой',
      },
    },
    step2: {
      title: 'Насколько БОЛЬШОЕ это чувство?',
      subtitle: 'Передвинь ползунок, чтобы показать насколько оно сильное',
      intensityLabels: {
        small: 'Маленькое',
        medium: 'Среднее',
        huge: 'ОГРОМНОЕ',
      },
      continueButton: 'Продолжить',
      backButton: 'Назад',
    },
    step3: {
      title: 'Какое именно это чувство?',
      subtitle: 'Выбери то, что лучше всего подходит',
      continueButton: 'Продолжить',
      backButton: 'Назад',
      skipButton: 'Пропустить',
      secondaryEmotions: {
        lonely: { label: 'Одиноко', description: 'Как будто никого нет рядом' },
        letDown: { label: 'Разочарован', description: 'Всё пошло не так, как я хотел' },
        leftOut: { label: 'Исключён', description: 'Все включены, кроме меня' },
        hurt: { label: 'Обижен', description: 'Кто-то заставил меня чувствовать себя плохо' },
        missingSomeone: { label: 'Скучаю по кому-то', description: 'Хочу, чтобы кто-то был здесь' },
        annoyed: { label: 'Раздражён', description: 'Кто-то продолжает меня раздражать' },
        notFair: { label: 'Несправедливо', description: 'Со мной плохо обращаются' },
        jealous: { label: 'Завидую', description: 'У кого-то есть то, что я хочу' },
        disrespected: { label: 'Неуважаем', description: 'Никто меня не слушает' },
        protective: { label: 'Защищаю', description: 'Кто-то связался с моими вещами или людьми, которых я люблю' },
        nervous: { label: 'Нервничаю', description: 'Что-то приближается, и мне страшно' },
        tooMuch: { label: 'Слишком много', description: 'Всё кажется слишком много' },
        embarrassed: { label: 'Смущён', description: 'Думаю, что люди меня осуждают' },
        scared: { label: 'Испуган', description: 'Я не чувствую себя в безопасности' },
        worriedMessedUp: { label: 'Боюсь, что напортачил', description: 'Думаю, что сделал что-то не так' },
        excited: { label: 'Взволнован', description: 'Не могу дождаться чего-то!' },
        relieved: { label: 'Облегчён', description: 'Что-то плохое закончилось' },
        loved: { label: 'Любим', description: 'Люди заботятся обо мне' },
        proud: { label: 'Горжусь', description: 'Я сделал что-то крутое' },
        surprisedGood: { label: 'Удивлён (хорошо)', description: 'Случилось что-то классное' },
        exhausted: { label: 'Истощён', description: 'Энергии не осталось' },
        bored: { label: 'Скучно', description: 'Ничего не интересно' },
        burnedOut: { label: 'Выгорел', description: 'Я слишком старался' },
        doneWithToday: { label: 'Хватит на сегодня', description: 'Просто хочу, чтобы этот день закончился' },
        needBreak: { label: 'Нужен перерыв', description: 'Слишком много всего происходит' },
        dontGetIt: { label: 'Не понимаю', description: 'Что-то не имеет смысла' },
        mixedUp: { label: 'Запутался', description: 'Не уверен, что думаю' },
        stuck: { label: 'Застрял', description: 'Не знаю, что делать' },
        foggy: { label: 'Туманно', description: 'Не могу ясно мыслить' },
        surprisedConfused: { label: 'Удивлён (непонятно)', description: 'Это было неожиданно и странно' },
        cantDoIt: { label: 'Не могу', description: 'Это слишком сложно' },
        keepTrying: { label: 'Пытаюсь, но не получается', description: 'Ничего не работает' },
        runningOutOfTime: { label: 'Заканчивается время', description: 'Не хватает времени закончить' },
        blocked: { label: 'Заблокирован', description: 'Что-то мешает' },
        nobodyUnderstands: { label: 'Никто не понимает', description: 'Не могу объяснить, что мне нужно' },
        justMeh: { label: 'Просто... мэх', description: 'На самом деле ничего не чувствую' },
        disconnected: { label: 'Отключён', description: 'Как будто смотрю издалека' },
        spacedOut: { label: 'Витаю в облаках', description: 'Мозг где-то в другом месте' },
        dontWantToTalk: { label: 'Не хочу говорить', description: 'Просто хочу тишины' },
        whatever: { label: 'Всё равно', description: 'Мне сейчас всё равно' },
      },
      unsure: { label: 'Не уверен', description: 'Не могу точно определить' },
    },
    step4: {
      title: 'Откуда началось это чувство?',
      subtitle: 'Выбери то, что больше всего подходит',
      continueButton: 'Далее',
      backButton: 'Назад',
      contexts: {
        friends: { label: 'Друзья', description: 'Что-то с моими друзьями' },
        family: { label: 'Семья', description: 'Что-то дома' },
        school: { label: 'Школа/Домашка', description: 'Что-то насчёт школы или работы, которую надо сделать' },
        somethingSaid: { label: 'Кто-то что-то сказал', description: 'Слова, которые меня расстроили' },
        somethingHappened: { label: 'Что-то только что случилось', description: 'Конкретная ситуация только что произошла' },
        myBody: { label: 'Моё тело', description: 'Устал, голоден, болею, или просто физические вещи' },
        online: { label: 'Что-то онлайн', description: 'Что-то, что я увидел или случилось онлайн' },
        justFeeling: { label: 'Просто так чувствую', description: 'Не знаю почему' },
      },
    },
    step5: {
      title: 'Давай разберёмся вместе',
      placeholder: 'Напиши, как ты себя чувствуешь...',
      sendButton: 'Отправить',
      backButton: 'Назад',
      shareButton: 'Поделиться с родителем',
      shareConfirm: 'Резюме скопировано! Можешь вставить его и поделиться с взрослым, которому доверяешь.',
      thinking: 'Думаю...',
      crisisResources: {
        title: 'Тебе может понадобиться дополнительная помощь',
        message: 'Похоже, ты переживаешь что-то очень трудное. Пожалуйста, поговори с взрослым, которому доверяешь, или позвони:',
        hotline: 'Телефон доверия: 8-800-2000-122 (RU) или твой местный экстренный номер',
      },
    },
  },
};

/**
 * TRANSLATION REFERENCE NOTE
 * ========================
 * 
 * When adding new features/steps, add translations in this structure:
 * 
 * 1. Define the interface in `Translations` type above
 * 2. Add translations for all 3 languages: en, bg, ru
 * 3. Keep the structure consistent across all languages
 * 
 * Example for future steps:
 * 
 * step2: {
 *   title: 'Next question...',
 *   options: {
 *     option1: 'Option 1',
 *     option2: 'Option 2',
 *   }
 * }
 * 
 * Language codes:
 * - en: English
 * - bg: Bulgarian (Български)
 * - ru: Russian (Русский)
 */
