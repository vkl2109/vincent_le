import { 
    Group,
    rem,
    Image,
    Menu,
    Burger
} from "@mantine/core"
import VINNI from "../assets/VINNI.png"
import { Link } from "react-router-dom"
import { useDisclosure } from '@mantine/hooks';

export function Header () {
    const [opened, { toggle }] = useDisclosure(false);

    return(
        <Group h={rem(100)} justify="space-between" p="sm">
            <Link to="/" style={{ height: '100%'}}>
                <Image src={VINNI} h="100%" />
            </Link>
            <Group gap={20} visibleFrom="sm">

            </Group>
            <Menu opened={opened} onChange={toggle}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="/music">
              Music
            </Menu.Item>
            <Menu.Item component="a" href="/game">
              Game
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        </Group>
    )
}