// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  ButtonComponent,
  TrackComponent,
  IconComponent,
  LabeledIconComponent,
  TextareaComponent,
  FormItem,
  HtmlSectionComponent,
  ContentContainerComponent,
} from '@egov/cvi-react';
import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <ButtonComponent appearance={'primary'} size={'s'}>
        Click me
      </ButtonComponent>
      <div />

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
