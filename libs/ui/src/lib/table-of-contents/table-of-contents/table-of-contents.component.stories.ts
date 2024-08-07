import { Meta } from '@storybook/angular';
import notes from './table-of-contents.component.md';
import { TableOfContentsComponent } from './table-of-contents.component';

export default {
  title: 'Angular/Table of contents/Table of contents',
  component: TableOfContentsComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: notes,
      },
    },
  },
  args: {
    title: 'Table of contents',
  },
} as Meta;

export const Default = {
  render: (args: TableOfContentsComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-table-of-contents-wrapper>
        <div>
          <div cviNgToCSection="section-one">
            <h1>Section One</h1>
            <p>This Pokemon is a ice-type Pokemon and looks a lot like an antelope. It has snowy legs, an icicle covered tail and frosty ears. They're generally playful by nature and can often be found in winter. If you're out looking for them they can often be seen lurking about and on their own. It tends to attack with Haze and Ice Punch. It hasn't evolved yet and there are no known evolutions.</p>
            <p>It shall be then, when rocks will rain from the sky, a man clad in green shall bring forth a rise of faith.</p>
            <p>It shall be then, when what is blue turns red, the false leader shall bring the toppling of leaders and the return of dragons.</p>
            <p>Billy's first act on arriving in this sanctum was to release the cat, which, having moved restlessly about for some moments, finally came to the conclusion that there was no means of getting out, and settled itself on a corner of the settee. Psmith, sinking gracefully down beside it, stretched out his legs and lit a cigarette. Mike took one of the ordinary chairs; and Billy Windsor, planting himself in the rocker, began to rock rhythmically to and fro, a performance which he kept up untiringly all the time.</p>
            <p>Once the true one reveals herself, a random act of kindness shall mark a strengthening of bonds.</p>
            <p>This Pokemon is a poison-type Pokemon and looks a little like a caterpillar. It has phosphorescent skin, thin legs and a lack of a mouth. They're generally threatening by nature and can often be found in labyrinths. If you're out looking for them they can often be seen on their own. It tends to attack with Venoshock and Sludge. It hasn't evolved yet, but could do so twice.</p>
            <p>This Pokemon is a psychic-type Pokemon and faintly looks like a mouse. It has a glowing snout, camouflaged fur and fat legs. They're generally timid by nature and can often be found near sanctuaries. If you're out looking for them they can often be seen on their own. It tends to attack with Trick Room and Lunar Dance. It hasn't evolved yet, but could do so once.</p>
            <p>Once the true one reveals herself, a random act of kindness shall mark a strengthening of bonds.</p>
            <p>When the brother becomes the father, a suspicious death shall bring forth bloodshed of blue blood and the return of monsters.</p>
            <p>When the day comes that the day is shortest, three siblings shall usher forth bloodshed of blue blood.</p>
            <p>The day kingdoms collide, a suspicious accident shall cause a time of peace and an age of failing crops.</p>
            <p>When the day comes that the day is shortest, three siblings shall usher forth bloodshed of blue blood.</p>
          </div>

          <div cviNgToCSection="section-two">
            <h1>Section Two</h1>
            <p>Happily wall anything pleasant court made vegetable freedom printed plate education six longer anyway mill forty active manufacturing struggle darkness teach round further handle.</p>
            <p>so image across automobile twenty how some fight earn fireplace elephant flow cat slightly factor free mighty most fox taken seldom rhyme especially upper.</p>
          </div>

          <div cviNgToCSection="section-three">
            <h1>Section Three</h1>
            <p> It shall be on the day that the world becomes shrouded in shadows, the
              prophet shall bring an eternal night and a change of leadership.</p>
            <p> It shall be on the day that steel turns to rust, two enemies shall cause
              the toppling of leaders and the beginning of a better future.</p>
            <p> The day kingdoms collide, a suspicious accident shall cause a time of
              peace and an age of failing crops.</p>
            <p>The day fire burns blue, the prophet shall cause an age of anarchy.</p>
            <p>When the moment comes that one becomes many and many becomes one, a man
              clad in green shall bring forth the dawn of evil and a time of peace.</p>
            <p> The day the rain returns, a victory shall mark an end to hunger and the
              end of wealth.</p>
            <p> As soon as the sun turns dark, a sudden death shall cause a generation of
              health and an age of misfortune.</p>
            <p> It shall be then, when what is blue turns red, the false leader shall
              bring the toppling of leaders and the return of dragons.</p>
            <p> It shall be on the day that the world becomes shrouded in shadows, the
              prophet shall bring an eternal night and a change of leadership.</p>
            <p> This Pokemon is a psychic-type Pokemon and faintly looks like a mouse. It
              has a glowing snout, camouflaged fur and fat legs. They're generally timid
              by nature and can often be found near sanctuaries. If you're out looking
              for them they can often be seen on their own. It tends to attack with
              Trick Room and Lunar Dance. It hasn't evolved yet, but could do so once.</p>
            <p> As soon as the sea swallows the earth, two brothers shall bring a rise of
              faith.</p>
            <p> As soon as the sea swallows the earth, two brothers shall bring a rise of
              faith.</p>
            <p> It shall be on the day that steel turns to rust, two enemies shall cause
              the toppling of leaders and the beginning of a better future.</p>
            <p> There comes a day when prey kills predator, the young one shall usher
              forth a strengthening of bonds and new aggressions.</p>
            <p> It shall be then, when what is blue turns red, the false leader shall
              bring the toppling of leaders and the return of dragons.</p>
            <p> This Pokemon is a ice-type Pokemon and looks a lot like a cod. It has
              stubby fins, pure white scales and a cavernous mouth. They're generally
              energetic by nature and can often be found during a blizzard. If you're
              out looking for them they can often be seen among many other kinds of
              Pokemon. It tends to attack with Ice Ball and Aurora Beam. It has evolved twice and can evolve no more. </p>
          </div>

          <div cviNgToCSection="section-four">
            <h1>Section Four</h1>
            <p> When the moment comes that the dead rise, the accused shall cause an age
            of lawlessness.</p>
            <p> This Pokemon is a ice-type Pokemon and looks a lot like an antelope. It
              has snowy legs, an icicle covered tail and frosty ears. They're generally
              playful by nature and can often be found in winter. If you're out looking
              for them they can often be seen lurking about and on their own. It tends
              to attack with Haze and Ice Punch. It hasn't evolved yet and there are no
              known evolutions. </p>
            <p> As soon as the sea swallows the earth, two brothers shall bring a rise of
              faith. </p>
            <p> There comes a day when mountains move and rivers shiver, a refusal shall
              bring the end of leadership. </p>
            <p> "Too decorous, Comrade Jackson. I came over here principally, it is true,
              to be at your side, should you be in any way persecuted by scoundrels. But
              at the same time I confess that at the back of my mind there lurked a hope
              that stirring adventures might come my way. I had heard so much of the
              place. Report had it that an earnest seeker after amusement might have a
              tolerably spacious rag in this modern Byzantium. I thought that a few
              weeks here might restore that keen edge to my nervous system which the
              languor of the past term had in a measure blunted. I wished my visit to be
              a tonic rather than a sedative. I anticipated that on my return the cry
              would go round Cambridge, 'Psmith has been to New York. He is full of
              oats. For he on honey-dew hath fed, and drunk the milk of Paradise. He is
              hot stuff. Rah!' But what do we find?" </p>
            <p> It shall be then, when rocks will rain from the sky, a man clad in green
              shall bring forth a rise of faith. </p>
            <p>The day fire burns blue, the prophet shall cause an age of anarchy.</p>
            <p> By the time that Pugsy returned, carrying a five-cent bottle of milk, the
              animal had vacated the book-shelf, and was sitting on the table, washing
              her face. The milk having been poured into the lid of a tobacco-tin, in
              lieu of a saucer, she suspended her operations and adjourned for
              refreshments. Billy, business being business, turned again to Luella
              Granville Waterman, but Pugsy, having no immediate duties on hand,
              concentrated himself on the cat. </p>
            <p> A waiter made an ingratiating gesture towards the basket, but the young
              man stopped him. "Not on your life, sonny," he said. "This stays right
              here." He placed it carefully on the floor beside his chair, and proceeded to order dinner. </p>
            <p> When the brother becomes the father, a suspicious death shall bring forth
              bloodshed of blue blood and the return of monsters. </p>
            <p>The day fire burns blue, the prophet shall cause an age of anarchy.</p>
          </div>


          <div cviNgToCSection="section-five">
            <h1>Section Five</h1>
            <p>Billy Windsor had started life twenty-five years before this story opens on his father's ranch in Wyoming. From there he had gone to a local paper of the type whose Society column consists of such items as "Pawnee Jim Williams was to town yesterday with a bunch of other cheap skates. We take this opportunity of once more informing Jim that he is a liar and a skunk," and whose editor works with a revolver on his desk and another in his hip-pocket. Graduating from this, he had proceeded to a reporter's post on a daily paper in a Kentucky town, where there were blood feuds and other Southern devices for preventing life from becoming dull. All this time New York, the magnet, had been tugging at him. All reporters dream of reaching New York. At last, after four years on the Kentucky paper, he had come East, minus the lobe of one ear and plus a long scar that ran diagonally across his left shoulder, and had worked without much success as a free-lance. He was tough and ready for anything that might come his way, but these things are a great deal a matter of luck. The cub-reporter cannot make a name for himself unless he is favoured by fortune. Things had not come Billy Windsor's way. His work had been confined to turning in reports of fires and small street accidents, which the various papers to which he supplied them cut down to a couple of inches.</p>
            <p>This Pokemon is a ghost-type Pokemon and slightly resembles a toad. It has crimson skin, hidden legs and a serious looking mouth. They're generally fearful by nature and can often be found near graveyards. If you're out looking for them they can often be seen on their own. It tends to attack with Confuse Ray and Shadow Ball. It hasn't evolved yet and there are no known evolutions.</p>
            <p>This Pokemon is a ghost-type Pokemon and slightly resembles a toad. It has crimson skin, hidden legs and a serious looking mouth. They're generally fearful by nature and can often be found near graveyards. If you're out looking for them they can often be seen on their own. It tends to attack with Confuse Ray and Shadow Ball. It hasn't evolved yet and there are no known evolutions.</p>
            <p>Billy's first act on arriving in this sanctum was to release the cat, which, having moved restlessly about for some moments, finally came to the conclusion that there was no means of getting out, and settled itself on a corner of the settee. Psmith, sinking gracefully down beside it, stretched out his legs and lit a cigarette. Mike took one of the ordinary chairs; and Billy Windsor, planting himself in the rocker, began to rock rhythmically to and fro, a performance which he kept up untiringly all the time.</p>
            <p>"Then let us stagger forth with Comrade Windsor. While he is loading up that basket, we will be collecting our hats. . . . I am not half sure, Comrade Jackson," he added, as they walked out, "that Comrade Windsor may not prove to be the genial spirit for whom I have been searching. If you could give me your undivided company, I should ask no more. But with you constantly away, mingling with the gay throng, it is imperative that I have some solid man to accompany me in my ramblings hither and thither. It is possible that Comrade Windsor may possess the qualifications necessary for the post. But here he comes. Let us foregather with him and observe him in private life before arriving at any premature decision."</p>
            <p>It shall be then, when the sky is thick with water, a secret meeting shall usher forth an end to the gods and the rise of mankind.</p>
            <p>A waiter made an ingratiating gesture towards the basket, but the young man stopped him. "Not on your life, sonny," he said. "This stays right here." He placed it carefully on the floor beside his chair, and proceeded to order dinner.</p>
            <p>The day legend becomes history, an embarrassing defeat shall usher forth the return of monsters and an age of growth.</p>
            <p>When the brother becomes the father, a suspicious death shall bring forth bloodshed of blue blood and the return of monsters.</p>
            <p>It shall be then, when rocks will rain from the sky, a man clad in green shall bring forth a rise of faith.</p>
            <p>It shall be on the day that the world becomes shrouded in shadows, the prophet shall bring an eternal night and a change of leadership.</p>
            <p>The day legend becomes history, an embarrassing defeat shall usher forth the return of monsters and an age of growth.</p>
            <p>When the day comes that brothers clash, a suspicious malfunction shall usher forth a rise of a new god and an age of inhumanity.</p>
            <p>A waiter made an ingratiating gesture towards the basket, but the young man stopped him. "Not on your life, sonny," he said. "This stays right here." He placed it carefully on the floor beside his chair, and proceeded to order dinner.</p>
            <p>There comes a day when mountains move and rivers shiver, a refusal shall bring the end of leadership.</p>
            <p>As soon as the day is shortest, a sudden death shall cause a country's new rise and an age of bliss.</p>
            <p>This Pokemon is a ice-type Pokemon and looks a lot like an antelope. It has snowy legs, an icicle covered tail and frosty ears. They're generally playful by nature and can often be found in winter. If you're out looking for them they can often be seen lurking about and on their own. It tends to attack with Haze and Ice Punch. It hasn't evolved yet and there are no known evolutions.</p>
          </div>
        </div>

        <cvi-ng-table-of-contents [title]="title" cviNgStorybookCurrentComponent>
          <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Two" href="#section-two"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Three" href="#section-three"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Four" href="#section-four"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Five" href="#section-five"></cvi-ng-table-of-contents-item>
        </cvi-ng-table-of-contents>
      </cvi-ng-table-of-contents-wrapper>
    `,
  }),
};

export const WithRandomText = {
  render: (args: TableOfContentsComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-table-of-contents-wrapper>
        <div>
          <div cviNgToCSection="section-one">
            <h1>Section One</h1>
            <div [cviNgStorybookRandomParagraphs]="10"></div>
          </div>

          <div cviNgToCSection="section-two">
            <h1>Section Two</h1>
            <div [cviNgStorybookRandomParagraphs]="10"></div>
          </div>

          <div cviNgToCSection="section-three">
            <h1>Section Three</h1>
            <div [cviNgStorybookRandomParagraphs]="10"></div>
          </div>

          <div cviNgToCSection="section-four">
            <h1>Section Four</h1>
            <div [cviNgStorybookRandomParagraphs]="10"></div>
          </div>


          <div cviNgToCSection="section-five">
            <h1>Section Five</h1>
            <div [cviNgStorybookRandomParagraphs]="10"></div>
          </div>
        </div>

        <cvi-ng-table-of-contents [title]="title" cviNgStorybookCurrentComponent>
          <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Two" href="#section-two"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Three" href="#section-three"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Four" href="#section-four"></cvi-ng-table-of-contents-item>
          <cvi-ng-table-of-contents-item label="Section Five" href="#section-five"></cvi-ng-table-of-contents-item>
        </cvi-ng-table-of-contents>
      </cvi-ng-table-of-contents-wrapper>
    `,
  }),

  parameters: {
    // disabling Chromatic because random text will trigger changes on each run
    chromatic: { disableSnapshot: true },
  },
};
