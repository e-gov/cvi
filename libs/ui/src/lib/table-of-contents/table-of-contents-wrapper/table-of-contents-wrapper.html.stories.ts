import { Meta, Story } from '@storybook/angular/';
import notes from './table-of-contents-wrapper.html.md';

export default {
  title: 'HTML/Table of contents',
  parameters: {
    layout: 'padded',
    notes,
  },
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <div class="veera-table-of-contents">
      <div class="veera-table-of-contents__main">
        <div id="section-one">
          <h1>Section One</h1>
          <p>
            There comes a day when prey kills predator, the young one shall usher
            forth a strengthening of bonds and new aggressions.
          </p>
          <p>
            This Pokemon is a ice-type Pokemon and looks a lot like an antelope.
            It has snowy legs, an icicle covered tail and frosty ears. They're
            generally playful by nature and can often be found in winter. If
            you're out looking for them they can often be seen lurking about and
            on their own. It tends to attack with Haze and Ice Punch. It hasn't
            evolved yet and there are no known evolutions.
          </p>
        </div>
        <div id="section-two">
          <h1>Section Two</h1>
          <p>
            Billy Windsor had started life twenty-five years before this story
            opens on his father's ranch in Wyoming. From there he had gone to a
            local paper of the type whose Society column consists of such items as
            "Pawnee Jim Williams was to town yesterday with a bunch of other cheap
            skates. We take this opportunity of once more informing Jim that he is
            a liar and a skunk," and whose editor works with a revolver on his
            desk and another in his hip-pocket. Graduating from this, he had
            proceeded to a reporter's post on a daily paper in a Kentucky town,
            where there were blood feuds and other Southern devices for preventing
            life from becoming dull. All this time New York, the magnet, had been
            tugging at him. All reporters dream of reaching New York. At last,
            after four years on the Kentucky paper, he had come East, minus the
            lobe of one ear and plus a long scar that ran diagonally across his
            left shoulder, and had worked without much success as a free-lance. He
            was tough and ready for anything that might come his way, but these
            things are a great deal a matter of luck. The cub-reporter cannot make
            a name for himself unless he is favoured by fortune. Things had not
            come Billy Windsor's way. His work had been confined to turning in
            reports of fires and small street accidents, which the various papers
            to which he supplied them cut down to a couple of inches.
          </p>
        </div>
        <div id="section-three">
          <h1>Section Three</h1>
          <p>
            A waiter made an ingratiating gesture towards the basket, but the
            young man stopped him. "Not on your life, sonny," he said. "This stays
            right here." He placed it carefully on the floor beside his chair, and
            proceeded to order dinner.
          </p>
        </div>
        <div id="section-four">
          <h1>Section Four</h1>
          <p>
            "Too decorous, Comrade Jackson. I came over here principally, it is
            true, to be at your side, should you be in any way persecuted by
            scoundrels. But at the same time I confess that at the back of my mind
            there lurked a hope that stirring adventures might come my way. I had
            heard so much of the place. Report had it that an earnest seeker after
            amusement might have a tolerably spacious rag in this modern
            Byzantium. I thought that a few weeks here might restore that keen
            edge to my nervous system which the languor of the past term had in a
            measure blunted. I wished my visit to be a tonic rather than a
            sedative. I anticipated that on my return the cry would go round
            Cambridge, 'Psmith has been to New York. He is full of oats. For he on
            honey-dew hath fed, and drunk the milk of Paradise. He is hot stuff.
            Rah!' But what do we find?"
          </p>
        </div>
        <div id="section-five">
          <h1>Section Five</h1>
          <p>
            There comes a day when prey kills predator, the young one shall usher
            forth a strengthening of bonds and new aggressions.
          </p>
          <p>
            This Pokemon is a ice-type Pokemon and looks a lot like an antelope.
            It has snowy legs, an icicle covered tail and frosty ears. They're
            generally playful by nature and can often be found in winter. If
            you're out looking for them they can often be seen lurking about and
            on their own. It tends to attack with Haze and Ice Punch. It hasn't
            evolved yet and there are no known evolutions.
          </p>
        </div>
      </div>
      <div class="veera-table-of-contents__aside">
        <div class="veera-table-of-contents__aside-stickable">
          <div role="navigation" aria-label="Sisukord" class="veera-table-of-contents__aside-inner">
            <h2 class="veera-table-of-contents__aside-title">Sisukord</h2>
            <ul class="veera-table-of-contents__aside-list">
              <li class="veera-table-of-contents__aside-list-item">
                <a class="veera-table-of-contents__aside-list-item-link" href="#section-one">Section One with a very long label that spans many lines</a>
              </li>
              <li class="veera-table-of-contents__aside-list-item">
                <a class="veera-table-of-contents__aside-list-item-link" href="#section-two">Section Two</a>
              </li>
              <li class="veera-table-of-contents__aside-list-item">
                <a class="veera-table-of-contents__aside-list-item-link" href="#section-three">Section Three</a>
              </li>
              <li class="veera-table-of-contents__aside-list-item">
                <a class="veera-table-of-contents__aside-list-item-link" href="#section-four">Section Four</a>
              </li>
              <li class="veera-table-of-contents__aside-list-item">
                <a class="veera-table-of-contents__aside-list-item-link" href="#section-five">Section Five</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
