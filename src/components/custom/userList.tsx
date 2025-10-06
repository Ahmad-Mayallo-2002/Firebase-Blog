import { Avatar, Link, Menu, Portal, Separator } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { auth } from "../../assets/config/firebase";
import { logoutUser } from "../../firebase/users/logout";

interface CurrentUser {
  email: string;
  image: string;
  displayName: string;
}

export default function UserList() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  useEffect(() => {
    try {
      const user = auth.currentUser;
      if (user) {
        setUser({
          email: user.email as string,
          displayName: user?.displayName as string,
          image: user?.photoURL as string,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const { Root, Trigger, Positioner, Content, Item } = Menu;
  return (
    <>
      <Root>
        <Trigger outline={"none"}>
          <Avatar.Root cursor="pointer">
            <Avatar.Image src={user?.image} />
          </Avatar.Root>
        </Trigger>
        <Portal>
          <Positioner>
            <Content p={0}>
              <Item value="username">{user?.displayName}</Item>
              <Item value="email">{user?.email}</Item>
              <Separator />
              <Item value="profile" asChild>
                <Link cursor="pointer" href="/profile">
                  Profile
                </Link>
              </Item>
              <Separator />
              <Item
                onClick={async () => await logoutUser()}
                value="delete"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
                asChild
              >
                <Link cursor="pointer" href="/">
                  Logout
                </Link>
              </Item>
            </Content>
          </Positioner>
        </Portal>
      </Root>
    </>
  );
}
