import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageSourcePropType,
} from "react-native";

// ---------- Types & Data ----------

interface CarouselItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
  subtitle: string;
}

const carouselData: CarouselItem[] = [
  {
    id: "1",
    title: "Harvest",
    subtitle: "Bold design meets timeless beauty",
    image: require("@/assets/images/card1.png"),
  },
  {
    id: "2",
    title: "Stoneworks",
    subtitle: "Bold design meets timeless beauty",
    image: require("@/assets/images/card2.png"),
  },
  {
    id: "3",
    title: "Harvest",
    subtitle: "Bold design meets timeless beauty",
    image: require("@/assets/images/card3.png"),
  },
];

const avatarImage =
  "https://s3-alpha-sig.figma.com/img/61c0/ec96/59774a4426d47949ef2a495d41b0d533?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hlVOIO7ryrNFkhyVqWdrSHGm0~itXwPJkv2unGgipo5DGxUCj2Be8HbPE5XIh8cWm1Bxu7US7QhDhVk8CRzU0NVqlLkMewfWEyqQgkPxqjhYPJhyiPcx5eaR~La30IuRWOZ7Loy-zV5p4PGPZiz9DBR-XRwzxV09XBRUUfGciAGCluQO0QzwOwjAxw2Uqn2g2-WBe5MKi8sTINGZsGuM4hnhPPY4WhKsXoAIQLMcXwCgDpAEy84ejox1S78kDdG6Kz7yZEhv~hDe9jd1rkrwpWTCy2psda3Le8EtsFjojwj37bueVlSZJhiQegwnQyHuHVhfcHBB-Qp5FYpf7t9yPw__";

const { width, height } = Dimensions.get("window");

// ---------- Components ----------

const CarouselItemComponent: React.FC<{ item: CarouselItem }> = ({ item }) => (
  <ImageBackground style={styles.carouselItem} source={item.image}>
    <View style={styles.carouselItemContent}>
      <Text style={styles.carouselItemTitle}>{item.title}</Text>
      <Text style={styles.carouselItemSubtitle}>{item.subtitle}</Text>
      <View style={styles.carouselButtonsContainer}>
        <TouchableOpacity onPress={() => console.log("Apply pressed")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Apply to my room</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Details pressed")}>
          <View style={styles.outlineButton}>
            <Text style={styles.outlineButtonText}>Details</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);

const Carousel: React.FC = () => (
  <View style={styles.carouselContainer}>
    <FlatList
      data={carouselData}
      renderItem={({ item }) => <CarouselItemComponent item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <ImageBackground
      source={require("@/assets/images/avatar-frame.png")}
      style={styles.avatarFrame}
      imageStyle={{ borderRadius: 12.86 }}
    >
      <Image source={{ uri: avatarImage }} style={styles.avatar} />
    </ImageBackground>
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>Georgia</Text>
      <Text style={styles.subtitle}>Let’s start designing</Text>
    </View>
  </View>
);

const NavBar: React.FC = () => (
  <ImageBackground
    source={require("@/assets/images/nav-frame.png")}
    style={styles.navContainer}
    imageStyle={{ resizeMode: "contain" }}
  >
    <ImageBackground
      source={require("@/assets/images/nav-gradient.png")}
      style={styles.navFrame}
    >
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => console.log("Home pressed")}>
          <View style={[styles.navItem, { backgroundColor: "#31312B" }]}>
            <Image
              source={require("@/assets/images/home.png")}
              style={styles.navIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Magic pressed")}>
          <View style={styles.navItem}>
            <Image
              source={require("@/assets/images/magic.png")}
              style={styles.navIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </ImageBackground>
);

const Menu: React.FC = () => (
  <View style={styles.menuContainer}>
    <Image source={require("@/assets/images/menu.png")} style={styles.menu} />
  </View>
);

// ---------- Main Screen ----------

const MyScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/bg-texture.png")}
      style={styles.background}
    >
      <Menu />
      <Header />
      <Carousel />
      <NavBar />
    </ImageBackground>
  );
};

// ---------- Styles ----------

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  menuContainer: {
    marginTop: height * 0.06,
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  menu: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  headerContainer: {
    marginTop: height * 0.03,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  avatarFrame: {
    width: 102.86,
    height: 102.86,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 12.86,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    color: "#848280",
  },
  subtitle: {
    fontSize: 24,
    color: "#1D1C19",
  },
  carouselContainer: {
    justifyContent: "center",
    height: height * 0.6,
  },
  carouselItem: {
    width: width * 0.9,
    height: height * 0.6,
    marginRight: 10,
    padding: 20,
    justifyContent: "flex-end",
  },
  carouselItemContent: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 10,
    borderRadius: 10,
  },
  carouselItemTitle: {
    fontSize: 32,
    color: "#fff",
  },
  carouselItemSubtitle: {
    fontSize: 16,
    color: "#fff",
    paddingTop: 5,
  },
  carouselButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 40,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 13,
    color: "#31312B",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  outlineButtonText: {
    fontSize: 13,
    color: "#fff",
  },
  navContainer: {
    flex: 1,
  },
  navFrame: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#1D1C19",
    borderRadius: 38,
  },
  navItem: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 60,
  },
  navIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});

export default MyScreen;
