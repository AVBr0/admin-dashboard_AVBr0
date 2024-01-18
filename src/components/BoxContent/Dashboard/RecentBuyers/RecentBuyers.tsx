import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { IPromiseBasedObservable } from 'mobx-utils';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserBoxWrapper } from './UserBoxContainer.styles';
import UserBoxContainer from './UserBoxContainer';
import { UserType } from '../../../../Types/Types';
import baseTheme from '../../../../theme';

type RecentBuyersProps = {
  getAllUsersAction: () => void;
  allUsers: IPromiseBasedObservable<UserType[]> | undefined;
};

const RecentBuyers = observer(
  ({ getAllUsersAction, allUsers }: RecentBuyersProps) => {
    const navigate = useNavigate();

    useEffect(() => {
      getAllUsersAction();
    }, [getAllUsersAction]);

    // console.log(allUsers);

    if (!allUsers) {
      return null;
    }

    return allUsers.case({
      pending: () => <div>Loading...</div>,
      rejected: () => <div>Error</div>,
      fulfilled: (value) => (
        <UserBoxWrapper>
          <Typography.Title style={{ color: baseTheme.colors.font }} level={4}>
            Recent Buyers
          </Typography.Title>

          {value
            .reverse()
            .slice(-3)
            .map((e) => (
              <UserBoxContainer
                textColor={baseTheme.colors.font}
                user={e}
                nav={navigate}
                key={e.id}
              />
            ))}
        </UserBoxWrapper>
      ),
    });
  }
);

export default RecentBuyers;
