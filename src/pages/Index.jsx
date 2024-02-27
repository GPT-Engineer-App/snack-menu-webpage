import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, HStack, Tag } from "@chakra-ui/react";
import { FaHamburger, FaPizzaSlice, FaCookie, FaIceCream } from "react-icons/fa";

const MenuItem = ({ title, description, price, icon: Icon }) => {
  return (
    <VStack p={4} borderWidth="1px" borderRadius="lg" spacing={3} align="stretch">
      <HStack justifyContent="space-between">
        <Icon size="24px" />
        <Tag size="lg" variant="solid" colorScheme="teal">
          ${price.toFixed(2)}
        </Tag>
      </HStack>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Delicious Snacks Menu
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
        <MenuItem title="Classic Burger" description="A juicy beef patty with lettuce, tomato, and our secret sauce." price={8.99} icon={FaHamburger} />
        <MenuItem title="Pepperoni Pizza" description="Crispy crust, mozzarella cheese, and pepperoni slices." price={12.5} icon={FaPizzaSlice} />
        <MenuItem title="Chocolate Chip Cookies" description="Freshly baked cookies with rich chocolate chips." price={4.99} icon={FaCookie} />
        <MenuItem title="Vanilla Ice Cream" description="Creamy vanilla ice cream with a choice of toppings." price={3.5} icon={FaIceCream} />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
