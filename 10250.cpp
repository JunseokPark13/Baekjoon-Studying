#include <iostream>

using namespace std;

int main() {

	int tcase, H, W, N;
	int Y = 0, X = 0;
	cin >> tcase;

	for (int i = 0; i < tcase;i++) {
		cin >> H >> W >> N;
		if (N % H == 0) {
			Y = H;
			X = N / H;
		}
		else {
			Y = N % H;
			X = N / H + 1;
		}
		cout << Y * 100 + X << endl;
		
		
		//cout << 100 * ((N - 1) % H + 1) + ((N - 1) / H) + 1 << endl;
		
	}
}