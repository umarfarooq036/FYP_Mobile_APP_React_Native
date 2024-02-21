// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  mainImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    
  },
  mainImage: {
    width: "90%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  thumbnailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  thumbnailImage: {
    width: 70,
    height: 70,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  productDetailsContainer: {
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  sizeOptionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  sizeOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  sizeOptionText: {
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  quantityButton: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: "#095a55",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "60%",
    alignSelf: "center",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  productDetailsText: {
    fontSize: 16,
    textAlign: "center",
  },
});
