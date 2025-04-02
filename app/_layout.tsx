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
} from "react-native";

// ---------- Types & Data ----------

interface CarouselItem {
  id: string;
  title: string;
  image: string;
  subtitle: string;
}

const carouselData: CarouselItem[] = [
  {
    id: "1",
    title: "Harvest",
    subtitle: "Bold design meets timeless beauty",
    image:
      "https://s3-alpha-sig.figma.com/img/93ba/0f64/7fbd57320d3743b8da9d72972afa02a9?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ej9NbMwpqaA~QebCkPn1BkvRSUrI~nQEYjP1~WC1ZZuGDGBaStxhA-AJvw0Jr0qrhYIuB1rxfYlvOI3QvZFn7h9FySXgVhKbJ~8XDjqoOOHZTL5P7GoAF26-CSwk1fe5do1pYQSHf0qJj4eNRlJludBs4koZUBQZ1wMhvvyiUpD6MXSHu8u4i7KViYiL95Mx0syZ75hqC7WBIJj5Q9qh51WiZet8JsD4xsCwEf0-tT7eeIdJmpB9bO2CAfqiWKOLTPlnJh-gGnbjOCayyOapqb96ARoOs0ojGjnSZ5Lb5dK3QNk2AN7ucpMYir0JmpMlW~lmeJCFr8hlhS3rauW-2w__",
  },
  {
    id: "2",
    title: "Stoneworks",
    subtitle: "Bold design meets timeless beauty",
    image:
      "https://s3-alpha-sig.figma.com/img/cc07/bcaa/d470152f9bf7f4fdc6f086b501a86f09?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NyE~q4sz~YeTe6Yag2QWSo6piFg9iUTCEhaei5aHb3~UkpfGcJi1qGljQUzU2KiKZ8-GKlIeGZV-2kWe3S1oNiaXXrXFO7w1ZenhO29xBC5dOighO0I7S3~eDTCGED7fq1F3zmJqRVccB2hZyHvzEieNEThIXzlaMy~kOqtaZwWe-j2OMIguj6opIXBnUjrdxl9e~0YSUoKwE5zga2bdIUnsRvyDiPMiahbj~WmTet-XJ2a9by6he1i~v8zOxuOR-o~3h6CC9pMAFlCt4dyJ2b1J01BaT2tme4-9NFts1DmVCQxuj8dGGDdY5JH9ykOdO6oooMD~fDbFG4Nre1H4ig__",
  },
  {
    id: "3",
    title: "Harvest",
    subtitle: "Bold design meets timeless beauty",
    image:
      "https://s3-alpha-sig.figma.com/img/4f63/8a21/f14264f50105850fc6c834f3d7f20fbe?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ms~QXCnPWKXd6t8HyB4cjRc-Ho3sHM3GAMTJWjH6Arak-NtQXdQUrqC1x6uJr6JKeVjwgO2jB0xyHQGbTt16nbfZrtTqWKMFrY3vgMpuyshftniONrNUpbLn5f5CKShJjJYzRs5S3tGq2nhHAIcbtkkZmpEb22ttqLgPP4A3F-4jiPsysodOfZy9wkBiuUSvYN6GQAbZsg~181Z6l1abW3jQvtFXurkifSFgrjAtLqZh6daAZomINtz87XR7hpTTRNd477wIXSBCaosA7JOTgCbSY1SfNfga6ssNdrix8mELqlWrJmcUNWJXrhZg1iuR29qVRwTTAUr1mqMqkXTuSg__",
  },
];

const avatarImage =
  "https://s3-alpha-sig.figma.com/img/61c0/ec96/59774a4426d47949ef2a495d41b0d533?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hlVOIO7ryrNFkhyVqWdrSHGm0~itXwPJkv2unGgipo5DGxUCj2Be8HbPE5XIh8cWm1Bxu7US7QhDhVk8CRzU0NVqlLkMewfWEyqQgkPxqjhYPJhyiPcx5eaR~La30IuRWOZ7Loy-zV5p4PGPZiz9DBR-XRwzxV09XBRUUfGciAGCluQO0QzwOwjAxw2Uqn2g2-WBe5MKi8sTINGZsGuM4hnhPPY4WhKsXoAIQLMcXwCgDpAEy84ejox1S78kDdG6Kz7yZEhv~hDe9jd1rkrwpWTCy2psda3Le8EtsFjojwj37bueVlSZJhiQegwnQyHuHVhfcHBB-Qp5FYpf7t9yPw__";

const { width, height } = Dimensions.get("window");

// ---------- Components ----------

const CarouselItemComponent: React.FC<{ item: CarouselItem }> = ({ item }) => (
  <ImageBackground style={styles.carouselItem} source={{ uri: item.image }}>
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
