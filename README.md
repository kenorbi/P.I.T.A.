# P.I.T.A.
Sistem integrat de gestiune al pitzii.

## Instalare si configurare proiect de pe GutHub

### GitHub Desktop
1. Se instaleaza [GitHub Desktop](https://desktop.github.com/) si se face sign in cu contul propriu de GitHub.
2. In aplicatia desktop se cloneaza proiectul: click pe + si selectare Clone.
3. Va apare o lista de proiecte din contul personal de GitHub sau la care userul e adaugat ca si colaborator. Din lista se selecteaza flipsnack-projects/P.I.T.A.
5. Selectati folderul unde se descarca proiectul.
6. Dupa ce ati efectuat modificarile din fisiere, selectati tab-ul Changes din aplicatia desktop (lista curenta de modificari).
7. Completati *Summary* si *Description* la modificarile curente si click pe *Commit to master*.
8. Click pe butonul *Sync* pentru a sincroniza versiunea locala cu master-ul din contul personal. **Atentie:** acesta este chiar **master**-ul proiectului !!

### GitGui
1. Se instaleaza [GitGui] (https://git-scm.com/download).
2. In interfata GitGui click pe *Clone Existing Repository*.
3. Se completeaza locatia repository-ului (https://github.com/flipsnack-projects/P.I.T.A.) si folderul tinta unde se va clona.
**Atentie:** Ca si folder tinta, se trece manual un folder inexistent, care va fi creat automat de GitGui. Altfel va afisa o eroare: *Location {folder} already exists.*
4. Click pe butonul Clone - se creeaza folderul specificat mai sus si se descarca fisierele proiectului.
5. Dupa ce se fac modificari la fisiere, vor apare modificarile in panelul *Unstaged Changes* (daca nu se vad modificarile cu tasta F5 se face refresh la aplicatie).
Se selecteaza din meniu *Commit > Stage to Commit* sau *Ctrl+T* pentru a pregati modificarile pentru commit si acestea vor apare in panelul *Staged Changes (Will Commit)*.
6. Dupa ce se completeaza mesajul pentru commit, click pe butonul *Commit* din partea de jos a ferestrei.
7. Dupa ce s-a realizat commitul, modificarile dispar din panelul *Staged Changes* si se da click pe butonul Push din partea de jos a ferestrei.
8. In cazul in care nu sunteti logat, aplicatia va cere pe rand numele utilizator si parola de la contul GitHub.

### Lucrul cu branchuri
1. In GitHub Desktop se creeaza un branch nou cu click pe butonul New branch si completarea numelui.
2. Se fac modificari pe fisierele din branch.
3. In aplicatie, se selecteaza tab-ul *Changes*, unde vor apare ultimele modificari din branch.
4. Dupa ce se completeaza *Summary* si *Description*, se da click pe *Commit to {nume branch}*.
5. La finalizarea commitului, se da click pe butonul *Publish*, in cazul in care branch-ul nu exista inca in repository in GitHub, sau *Sync*, daca deja s-a creat branchul in GitHub si exista commituri in el.
6. In cazul in care s-a facut intre timp de catre altcineva un alt commit pe branch, cand se face *Sync*, va apare o avertizare ca exista modificari necommitate. In cazul asta trebuie sa se faca commit la modificarile locale, dupa care se face *Sync*. In continuare trebuiesc rezolvate conflictele si dupa aceea inca un commit pe branch si sync pe remote.


## Express Hello World

Pentru a porni serverul Express, ruleaza `node app.js` in folderul proiectului.
