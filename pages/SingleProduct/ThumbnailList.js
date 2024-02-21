import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './style.module'; // Import styles if needed

const ThumbnailList = ({ thumbnailImages, onThumbnailClick }) => {
  return (
    <View style={styles.thumbnailContainer}>
      {thumbnailImages.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onThumbnailClick(image)}
        >
          <Image
            source={image}
            style={styles.thumbnailImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ThumbnailList;
