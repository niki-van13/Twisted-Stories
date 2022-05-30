import { StepGame } from "./types"


export let gameLivell: StepGame[] = [//skapar array av objekt från interface
    {
        
        
        id: 1,
        question: 'Välkommen till mitt quiz, är du redo?',
        answers: {
            leftBtn: { answer: "Yes, kör vi! ", path: 3}, 
            rightBtn: { answer: "Nej, snälla jag har inte tid", path: 2}
        }
    }, 
    {
        id: 2,
        question: 'Det tar inte så mycket tid, kom och spela det ska bli rolig ?',
        answers: {
            leftBtn: { answer: "Ok, Nu är jag redo", path: 3}, 
            rightBtn: { answer: "Jag är inte intreserad", path: 1}
        }
    }, 
    {
        id: 3,
        question: ' Då kan vi börja med frågor, vad ska du göra om du är ensam i en ö?',
        answers: {
            leftBtn: { answer: "First, jag ska kolla om det finns nån annan som bor där och ber om hjälp ", path: 4}, 
            rightBtn: { answer: "Jag kommer att göra några selfie för att dokumenterar min äventyr  ", path: 5}
        }
    },
    {
        id: 4,
        question: 'Tyvärr det finns inga manniska som bor där, och du är hungrig och du börjar fiska, men plötsligt duker upp hajärna vad gör du? ',
        answers: {
            leftBtn: { answer: 'Runnnnnnnnnnnnnn', path: 6}, 
            rightBtn: { answer: 'Sjunga Baby Shark ', path: 5}
        }
    },
        
        
    {
        id: 5,
        question: 'Opsss, game over ',
        answers: {
            leftBtn: { answer: ' R.i.P, Börja igen', path: 1}, 
            rightBtn: { answer: ' Du kan göra bättre ', path: 3},
        }
    },
        
        
    {
        id: 6,
        question: 'Snygt jobbat du överlever, men solen går ner och det bli nat och det är så javla kallt, vad går du då? ',
        answers: {
            leftBtn: { answer: 'Jag försöker att tända eld,  och hitta på en plats för att sova', path: 7}, 
            rightBtn:  { answer: 'Jag gör ingenting, jag titta på sjärnfall', path: 5}, 
        }
    },
    
        /*
    {
        id: 7,
        question: 'Bra, du överlever i din första vecka , nu hör du ett ljud , du ser att flygplan vad gör du då? ',
        answers: {
            leftBtn: { answer: 'jag försaker att tända en eld,  och hitta en säker plats att sova', path: 8}, 
            rightBtn:  { answer: 'Jag gör ingenting, jag tittade på stjärnornas spektakel', path: 5}, 
        }
    },
*/
    {
        id: 7,
        question: 'bra, du har överlived din första vecka , nu hör du ett ljud , du ser att flygplan vad gör du då? ',
        answers: {
            leftBtn: { answer: 'skriv i sanden, hjälp meeeeeeeeeeeeee', path: 8}, 
            rightBtn:  { answer: 'igneting , jag är trött så jag går och lägger mig', path: 5}, 
        }
    },

    {
        id: 8,
        question: 'du har varit så duktig, nu är du safe snygt gobbat ',
        answers: {
            leftBtn: { answer: 'det var rolig , vill  du spela ignen ? Varsågod', path: 1}, 
            rightBtn:{ answer: 'nästa gång gör det bättre  ', path: 5}, 
        }
    },
    
]