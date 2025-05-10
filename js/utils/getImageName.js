export function getImageName(imgTag) {
  const match = imgTag.match(/\/([^\/]+)\.[a-z]+"/i);
  return match ? match[1] : null;
}
