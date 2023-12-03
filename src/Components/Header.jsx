import { 
    Group,
    rem,
    Image,
    Menu,
    Burger,
    Text
} from "@mantine/core"
import VINNI from "../assets/VINNI.png"
import { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom"
import { useDisclosure } from '@mantine/hooks';
import classes from "../CSS/Header.module.css"

const links = [
  { link: '/about', label: 'About'},
  // { link: '/music', label: 'Music' },
  // { link: '/game', label: 'Game' },
  { link: '/portfolio', label: 'Portfolio' }
];

export function Header () {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/') setActive()
    }, [location])

    const items = links.map((link) => (
        <Link
        key={link.label}
        to={link.link}
        style={{ textDecoration: 'none' }}
        onClick={() => {
            setActive(link.link)
        }}
        >
            <Text size="xl" td={active == link.link ? "underline" : null}
            class={classes.link}>
                {link.label}
            </Text>
        </Link>
    ));

    return(
        <Group h={rem(100)} justify="space-between" p="md">
            <Link to="/" style={{ height: '100%'}}>
                <Image src={VINNI} h="100%" maw="90vw"/>
            </Link>
            <Group gap={20} visibleFrom="sm">
                {items}
            </Group>
            <Menu opened={opened} onChange={toggle}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Menu.Target>
          <Menu.Dropdown>
            {links.map((link, i) => {
              return(
                <Menu.Item key={i} component="a" href={link.link}>
                  {link.label}
                </Menu.Item>
              )
            })}
          </Menu.Dropdown>
        </Menu>
        </Group>
    )
}