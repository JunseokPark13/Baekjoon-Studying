#include <iostream>
#include <string>

using namespace std;

int swap(string k) {
	char temp = k[0];
	k[0] = k[2];
	k[2] = temp;

	return stoi(k);
}

int boj_2908() {

	string A, B;
	cin >> A >> B;

	if (swap(A) > swap(B)) cout << swap(A) << endl;
	else cout << swap(B) << endl;
	
	return 0;
}