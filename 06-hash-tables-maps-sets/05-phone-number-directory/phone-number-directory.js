function phoneNumberDirectory(phoneNumbers) {
  const directory = new Map();

  for (const entry of phoneNumbers) {
    const [name, phone] = entry.split(':');

    directory.set(name, phone);
  }

  return directory;
}

module.exports = phoneNumberDirectory;
