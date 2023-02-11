import { PostRequestButton } from './PostRequestButton';
import { renderWithProviders } from '../../utils/test';
import userEvent from '@testing-library/user-event';

describe('PostRequestButton', () => {
  const postRequestButtonProps = {
    handleClick: jest.fn(),
  };

  it('should render a "Add a Policyholder" button', () => {
    const { getByText } = renderWithProviders(
      <PostRequestButton {...postRequestButtonProps} />
    );
    expect(getByText('Add a Policyholder')).toBeInTheDocument();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const { getByText } = renderWithProviders(
      <PostRequestButton {...postRequestButtonProps} />
    );

    const postRequestButton = getByText('Add a Policyholder');

    userEvent.click(postRequestButton);

    expect(postRequestButtonProps.handleClick).toHaveBeenCalled();
  });
});
