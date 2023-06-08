// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  ButtonComponent,
  TrackComponent,
  IconComponent,
  LabeledIconComponent,
  TextareaComponent,
  FormItem,
  HtmlSectionComponent,
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
