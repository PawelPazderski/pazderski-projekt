const dictionary = {
  General: {
    theme:{
      en: "Motive",
      pl: "Motyw"
    },
  },
  Home: {
    menu: {
      home: {
        en: "Home",
        pl: "Strona główna"
      },
      portfolio: {
        en: "Portfolio",
        pl: "Portfolio"
      },
      contact: {
        en: "Contact",
        pl: "Kontakt"
      },
    },
    title: {
      en: "Welcome!",
      pl: "Witaj!"
    },
    about01:{
      en: "My name is Paweł Pazderski and I'm looking for a job as Junior Frontend Developer.",
      pl: "Nazywam się Paweł Pazderski i szukam pracy jako Junior Frontend Developer.",
    },
    about02: {
      en: "For over 5 years I have been working as a graphic designer in a graphic studio, dealing with costumers both individual and of a large printing house, where the studio is located. I design folders, catalogs, packaging and many other materials for printing and more. I also have the pleasure to be a lead graphic designer in the last eight editions of the ‘Osobowości i Sukcesy’ magazine.",
      pl: "Od ponad 5 lat pracuję jako grafik-projektant w studio graficznym, zajmując się zarówno obsługą klientów indywidualnych, jak też dużej drukarni, przy której mieści się studio. Zajmuję się projektami folderów, katalogów, opakowań i wielu innych materiałów do druku i nie tylko. Mam również przyjemność być grafikiem prowadzącym ostatnich ośmiu wydań magazynu Osobowości i Sukcesy."
    },
    about03: {
      en: "I have been interested in the IT for a long time - I am looking for new challenges and, above all, opportunities for professional development. I took my first steps on the Frontend Developer - React course. Intive Patronage 2023 gave me the opportunity to participate in a large project and learn new technologies. There is certainly a lot of learning ahead of me, but I am not afraid of it. I know this is my path for the future.",
      pl: "Branża IT interesuje mnie od dłuższego czasu - szukam nowych wyzwań i przede wszystkim możliwości rozwoju zawodowego. Pierwsze kroki stawiałem na kursie Frontend Developer - React. Udział w patronacie intive 2023 dał mi możliwość udziału w dużym projekcie i poznania nowych technologii. Przede mną jeszcze z pewnością sporo nauki, ale tej się nie boję. Wiem, że to moja droga na przyszłość."
    },
  },
  Contact: {
    title: {
      en: "Contact me",
      pl: "Napisz do mnie"
    },
    form: {
      name: {
        en: "Name",
        pl: "Imię",
      },
      email: {
        en: "Email",
        pl: "Email",
      },
      msg: {
        en: "Your message",
        pl: "Twoja wiadomość",
      },
      button: {
        en: "Send",
        pl: "Wyślij",
      },
    },
    formErrors: {
      emptyName: {
        en: "Name is required",
        pl: "Imię wymagane",
      },
      shortName: {
        en: "Min. 2 digits",
        pl: "Min. 2 znaki",
      },
      emptyEmail: {
        en: "Email is required",
        pl: "Email wymagany",
      },
      invalidEmail: {
        en: "Invalid email",
        pl: "Błędny adres email",
      },
      emptyMsg: {
        en: "Message is empty",
        pl: "Brak wiadomości",
      },
      shortMsg: {
        en: "Min. 10 digits",
        pl: "Min. 10 znaków",
      },
      longMsg: {
        en: "Max. 250 digits",
        pl: "Maks. 250 znaków",
      },
    },
    toastInfo: {
      confirm: {
        en: "Message was sent successfully",
        pl: "Wiadomość została wysłana pomyślnie"
      },
      error: {
        en: "Oops, something went wrong",
        pl: "Coś poszło nie tak"
      },
    }
  },
}


export default dictionary;

export type dictionaryType = typeof dictionary;
