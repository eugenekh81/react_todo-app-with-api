/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

type Props = {
  error: string,
  closeError: (error: string) => void
};

export const ErrorNotification: React.FC<Props> = React.memo(({
  error,
  closeError,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className="notification is-danger is-light has-text-weight-normal"
      hidden={!error}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => closeError('')}
      />
      {error}
    </div>
  );
});
