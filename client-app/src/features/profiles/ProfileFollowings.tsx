import { Card, Grid, GridColumn, Header, TabPane } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ProfileFollowings() {
    const {profileStore} = useStore();
    const {profile, followings, loadingFollowings, activeTab} = profileStore;

    return (
        <TabPane loading={loadingFollowings}>
            <Grid>
                <GridColumn width={16}>
                    <Header 
                        floated='left' 
                        icon='user' 
                        content={activeTab === 3 ? `People following ${profile?.displayName}` : `People ${profile?.displayName} is following`}
                    />
                </GridColumn>
                <GridColumn width={16}>
                    <Card.Group itemsPerRow={5}>
                        {followings.map((profile: Profile) => (
                            <ProfileCard key={profile.username} profile={profile} />
                        ))}
                    </Card.Group>
                </GridColumn>
            </Grid>
        </TabPane>
    )
})