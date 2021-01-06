#include <iostream>

using namespace std;

int boj_0107() {

	int n, m; cin >> n >> m;
	int temp = 0;

	int* card = new int[n];

	for (int i = 0; i < n; i++) {
		cin >> card[i];
	}

	for (int i = 0; i < n; i++) {
		for (int j = i+1; j < n; j++) {
			for (int k = j+1; k < n; k++) {
 				if (card[i] + card[j] + card[k] == m) {
					temp = card[i] + card[j] + card[k];
					break;
				}
				if (card[i] + card[j] + card[k] < m) {
					if (temp < card[i] + card[j] + card[k]) {
						temp = card[i] + card[j] + card[k];
					}
				}
				
			}
		}
	}
	cout << temp << "\n";

	return 0;
}