function ForLoop() {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
        for (let i = 0;i < stringArray1.length;
        i++) {
            const string1 = stringArray1[i];
            stringArray2.push(
            string1.toUpperCase());
        }   

  return (
    <div>
      <h3>Loop through arrays</h3>
        stringArray2 = {stringArray2[1]}<br />
    </div>
  );
}

export default ForLoop;

