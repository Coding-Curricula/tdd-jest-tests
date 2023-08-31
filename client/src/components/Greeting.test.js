import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

test('renders greeting', () => {
    const {getByText} = render(<Greeting name="Sun" />);
    expect(getByText('Greetings, Sun')).toBeInTheDocument();
});