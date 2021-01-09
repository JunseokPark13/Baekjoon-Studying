#include <iostream>
#include <string>

using namespace std;

int boj_1436() {

	int n; cin >> n;

	string key = "666";
	int num = 666;
	int count = 1;

	while (1) {
		if (to_string(num).find("666") != -1) {
			if (count == n) {
				break;
			}
			else {
				count++;
			}
		}
		num++;
	}

	cout << num << "\n";

	return 0;
}