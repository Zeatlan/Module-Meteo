## Explications

### Algorithme d'autocorrection d'un mot

Avant de lancer l'Algorithme nous vérifions si le mot existe avec :
`wordExist($word)`

Deux options s'offrent à nous :

- Le mot existe, **l'algorithme est terminé**
- Le mot n'existe pas, **on commence la vérification**

Nous pourrions créer une fonction récursive (ou une boucle) qui tournera jusqu'à que nous ayons testé toutes les combinaisons possibles.

Puis, nous itérerons chaque lettre du mot en testant toutes les combinaisons en utilisant la fonction `getNearest`. (Nous prendrons soin de faire les tests de combinaison sur une variable temporaire de sorte à ne pas perdre notre mot de base)

Enfin, nous noterons chaque combinaison dans un tableau (lui aussi temporaire) de sorte à ne pas retester deux fois une même combinaison !

Pour ce qui est des combinaisons valables ( `wordExist` retourne `true`), nous les stockerons dans un tableau avec toutes les autres suggestions possibles avec ce mot !

Ce qui nous donnerait :

- **hrllp** (mot de base)
- grllp (`h` => `g`)
- jrllp (`g` => `j`)
  **Toutes les combinaisons en modifiant la première lettre ont été testées, nous passons à la suivante**
- jellp (`r` => `e`)
- jtllp (`e` => `t`)
- ~~jrllp~~ (Déjà testé !)
  **Désormais, nous testons les deux premières simultanément**
- htllp
- hellp
- hrllp
- grllp
- gellp
- ~~gtllp~~ (Déjà testé !)

**Et ainsi de suite...**

> Dans le cas où nous avons utilisé toutes les combinaisons possibles et que l'on ne trouve rien, alors nous quitterons la boucle et nous serons dans l'incapacité de proposer un mot.

### Exemple procédurale

> hrllp

- `wordExist('hrllp')`
  - Return true
    **Stocker la suggestion dans un tableau puis continuer**
  - Return false
    **Continuer**

**Début de l'itération**

- Création d'une variable `tempWord` où nous stockerons une duplication du mot `hrllp`.
- `getNearest('h')` retourne `['g', 'j']`
  - Nous gardons `g`
  - Nous remplaçons la lettre `h` par la lettre `g` sur la variable `tempWord`.
  - Nous relançons `wordExist('grllp')`

Nous répétons l'opération ci-dessus, cette fois avec la lettre `j`.

Une fois fait, nous passons à la lettre suivante, nous répétons la même opération pour cette même lettre.

Une fois que nous avons testé toutes les combinaisons de la seconde lettre, nous testons les deux premières lettres simultanément.

Si nous n'avons toujours rien, nous passons à la troisième lettre, en exécutant la même logique, nous testons chaque combinaison pour cette seule lettre, puis nous travaillons avec les trois premières lettres simultanément.

Enfin, nous essayons chaque combinaisons possibles (**en n'oubliant de tester aussi les lettres par défaut !**).

Si tout se déroule bien, vous aurez les suggestions suivantes :
`hello` et `gekko` ! :)

(Si nous partons du principe qu'un "mot" peut désigner un animal ou autre évidemment)
