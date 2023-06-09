// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  ButtonComponent,
  BreadcrumbsComponent,
  TabElement,
  TabGroupComponent,
  TrackComponent,
  IconComponent,
  LabeledIconComponent,
  TextareaComponent,
  FormItem,
  HtmlSectionComponent,
  ContentContainerComponent,
  ContentPanelComponent,
  ScreenreaderTextComponent,
  SelectComponent,
  StatusBadgeComponent,
  AccordionComponent,
  InputComponent,
  RadioButtonGroupComponent,
  ReorderableListComponent,
  TableOfContentsComponent,
  TableOfContentsItemComponent,
  TableOfContentsWrapperComponent,
  TableBodyCellComponent,
  TableBodyRowComponent,
  TableComponent,
  TableHeaderCellComponent,
  useToast,
  Tooltip,
  Modal,
  Steps,
  Notification,
} from '@egov/cvi-react';


export function App() {

  const toast = useToast()
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<number | undefined>(undefined)

  const showToast = (type: 'info' | 'success' | 'error' | 'warning') => toast.open({
    type,
    title: 'Toast Title',
    message: 'Toast Message',
    timeout: 2000,
  })

  const initialTable = {
    header: ['Event', 'Status', 'Last changed'],
    body: [
      { event: 'Event', state: "Draft", lastChanged: '2021-07-15' },
      { event: 'Event 1', state: 'Public', lastChanged: '2021-07-15' },
    ]
  }

  return (
    <>
      <ButtonComponent appearance={'primary'} size={'s'}>
        Click me
      </ButtonComponent>
      <div />
      <SelectComponent
        style={{ width: 250 }}
        label={'Some label'}
        placeholder={'Otsi elementi või lisa uss 🐍'}
        options={[
          {
            label: 'Item 1 that is not that short but actually quite long',
            value: 'first',
          },
          { label: 'item 2', value: 'second' },
          { label: 'Item that can be selected from keyboard', value: 'third' },
          { label: 'Item 4', value: 'fourth' },
          { label: 'Item 5', value: 'fifth' },
          {
            label: 'Item 6 with a very long text spanning many lines',
            value: 'sixth',
          },
        ]}
      ></SelectComponent>
      <TabGroupComponent>
        <TabElement title="Tab 1">First tab content</TabElement>
        <TabElement title="Tab 2">Second tab content</TabElement>
      </TabGroupComponent>

      <HtmlSectionComponent>
        <label>CVI </label>
        <label>Testing </label>
        <label>Section </label>
        <HtmlSectionComponent>
          <label>CVI </label>
          <label>Testing </label>
          <label>Section </label>
        </HtmlSectionComponent>
      </HtmlSectionComponent>

      <TrackComponent layout="grid" isMultiline={true} justify="center">
        <ButtonComponent>Button 1</ButtonComponent>
        <ButtonComponent>Button 2</ButtonComponent>
      </TrackComponent>

      <div>
        <TextareaComponent
          placeholder="Enter Your Name"
          maxLength={30}
          showMaxLength={false}
          resizable={true}
        ></TextareaComponent>
      </div>

      <FormItem
        label={'Your email'}
        placeholder="placeholder..."
        labelPosition="side"
        isLabelHidden={false}
        required={false}
        htmlId="id"
      ></FormItem>

      <IconComponent
        icon={undefined}
        label={'close'}
        size="medium"
      ></IconComponent>

      <LabeledIconComponent
        icon={undefined}
        label={'close'}
        size="medium"
        iconPosition="before"
        iconLabel={'Test Label'}
        gap={10}
        insideButton={true}
      ></LabeledIconComponent>

      <ContentContainerComponent>
        Create recall build border flat fourth wild however swam motor shake fly
        hidden running dead bear walk floor plan chance yourself shade hunt
        came. Lay fence wave several short birth desk thrown clearly official
        blanket strike neck can card cabin quiet horn leather rocket forth
        current kill mile. Color paper sad bread substance fact consider soon
        after west brass impossible perhaps reason interior hit program start
        section unless peace whatever screen record. Scientific torn spirit
        period surrounded brief drew account show tube canal meet walk
        expression just syllable exactly cannot industrial dawn universe worth
        include movie. Fight game touch ants kept strange win impossible happen
        deeply company yesterday above different birth nation fall thee pleasant
        given main wrote appearance situation. Basis box factory bar quickly
        shut whistle breathe sweet limited while indicate gulf labor stream plan
        southern green produce break for place concerned discussion.
      </ContentContainerComponent>

      <ContentPanelComponent title={'CVI'}>
        Create recall build border flat fourth wild however swam motor shake fly
        hidden running dead bear walk floor plan chance yourself shade hunt
        came. Lay fence wave several short birth desk thrown clearly official
        blanket strike neck can card cabin quiet horn leather rocket forth
        current kill mile. Color paper sad bread substance fact consider soon
        after west brass impossible perhaps reason interior hit program start
        section unless peace whatever screen record. Scientific torn spirit
        period surrounded brief drew account show tube canal meet walk
        expression just syllable exactly cannot industrial dawn universe worth
        include movie. Fight game touch ants kept strange win impossible happen
        deeply company yesterday above different birth nation fall thee pleasant
        given main wrote appearance situation. Basis box factory bar quickly
        shut whistle breathe sweet limited while indicate gulf labor stream plan
        southern green produce break for place concerned discussion.
      </ContentPanelComponent>

      <ScreenreaderTextComponent label="Some text that should only be visible to a screen reader."></ScreenreaderTextComponent>

      <StatusBadgeComponent
        content="waiting"
        severityStyle="info"
      ></StatusBadgeComponent>

      <AccordionComponent
        singleOpen={true}
        items={[
          {
            title: 'Super Simple Accordion',
            body: 'Some content here.',
          },
          {
            title:
              'Yet another item, but this time disabled with a very long text',
            body: 'Disabled Content',
            disabled: true,
          },
        ]}
      ></AccordionComponent>

      <div>
        <InputComponent
          label="Your Name"
          placeholder="Name..."
          showMaxLength={false}
          maxLength={40}
          disabled={false}
          icon={undefined}
        ></InputComponent>
      </div>

      <ReorderableListComponent
        items={[
          { index: 0, value: 'Me as well' },
          { index: 1, value: 'And so am I' },
          { index: 2, value: 'I am a reorderable item' },
        ]}
      ></ReorderableListComponent>

      <BreadcrumbsComponent
        labels={['Avaleht', 'Abiellumine', 'Avalduse esitamine']}
      />

      <RadioButtonGroupComponent
        label={'Default radio buttons example'}
        name={''}
        items={[
          { value: '1', label: 1, },
          { value: '2', label: 2 },
        ]}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
      <RadioButtonGroupComponent
        apperance='regular'
        label={'Regular radio buttons example'}
        name={''}
        items={[
          { value: '1', label: 1 },
          { value: '2', label: 2 },
        ]}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
      <RadioButtonGroupComponent
        apperance='compact'
        label={'Compact radio buttons example'}
        name={''}
        items={[
          { value: '1', label: 1 },
          { value: '2', label: 2 },
        ]}
        onChange={(selectedValue) => console.log(selectedValue)}
      />

      <TableOfContentsWrapperComponent>
        <div>
          <div id="section-one">
            <h1>Section One</h1>
            <p>
              There comes a day when prey kills predator, the young one shall usher
              forth a strengthening of bonds and new aggressions.
            </p>
            <p>
              This Pokemon is a ice-type Pokemon and looks a lot like an antelope. It
              has snowy legs, an icicle covered tail and frosty ears. They're
              generally playful by nature and can often be found in winter. If you're
              out looking for them they can often be seen lurking about and on their
              own. It tends to attack with Haze and Ice Punch. It hasn't evolved yet
              and there are no known evolutions.
            </p>
          </div>
          <div id="section-two">
            <h1>Section Two</h1>
            <p>
              There comes a day when prey kills predator, the young one shall usher
              forth a strengthening of bonds and new aggressions.
            </p>
            <p>
              This Pokemon is a ice-type Pokemon and looks a lot like an antelope. It
              has snowy legs, an icicle covered tail and frosty ears. They're
              generally playful by nature and can often be found in winter. If you're
              out looking for them they can often be seen lurking about and on their
              own. It tends to attack with Haze and Ice Punch. It hasn't evolved yet
              and there are no known evolutions.
            </p>
          </div>
        </div>
        <TableOfContentsComponent title={'Sisukord'}>
          <TableOfContentsItemComponent
            label={'Section One with a very long label that spans many lines'}
            linkTo={'#section-one'}
            isSelected={true}
          />
          <TableOfContentsItemComponent
            label={'Section One with a very long label that spans many lines'}
            linkTo={'#section-two'}
          />
        </TableOfContentsComponent>
      </TableOfContentsWrapperComponent>

      <TableComponent
        headerCells={
          initialTable.header.map((data, i) => <TableHeaderCellComponent key={i}>{data}</TableHeaderCellComponent>)
        }
        body={
          initialTable.body.map((data, i) => <TableBodyRowComponent key={i}>
            <TableBodyCellComponent>{data.event}</TableBodyCellComponent>
            <TableBodyCellComponent>{data.state}</TableBodyCellComponent>
            <TableBodyCellComponent>{data.lastChanged}</TableBodyCellComponent>
          </TableBodyRowComponent>
          )
        }
      />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('success')}>Show Success Toast</ButtonComponent>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('info')}>Show Info Toast</ButtonComponent>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('error')}>Show Error Toast</ButtonComponent>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('warning')}>Show Warning Toast</ButtonComponent>
      </div>

      <Tooltip content='This is a tooltip'>
        <span>Hover to see tooltip</span>
      </Tooltip>

      <ButtonComponent appearance={'primary'} size={'s'} onClick={() => setShowModal(true)}>Show Modal</ButtonComponent>
      {showModal && (
        <Modal
          title='Some Title'
          onClose={() => setShowModal(false)}
        >
          <p>Some modal content</p>
        </Modal>
      )}

      <Notification
        title='Title'
        content='This is a notification'
        type='info'
        size='compact'
      />

      <Notification
        title='Title'
        content='This is a notification too'
        type='success'
      />

      <Steps
        title='Steps Example'
        description='Some Description'
        steps={[
          { title: 'Step A', content: 'Step a content' },
          { title: 'Step B', content: 'Step b content' },
          { title: 'Step C', content: 'Step c content' },
          { title: 'Step D', content: 'Step d content' },
        ]}
        activeStepIndex={step}
        select={setStep}
      />

      <Steps
        title='Steps Example'
        description='Some Description'
        steps={[
          { title: 'Step A', content: 'Step a content' },
          { title: 'Step B', content: 'Step b content' },
          { title: 'Step C', content: 'Step c content' },
          { title: 'Step D', content: 'Step d content' },
        ]}
        activeStepIndex={step}
        select={setStep}
      />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
