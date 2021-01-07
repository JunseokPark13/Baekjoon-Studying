#include <iostream>
#include <cmath>

using namespace std;

string blackary[8] = {
		{ "WBWBWBWB" },
		{ "BWBWBWBW" },
		{ "WBWBWBWB" },
		{ "BWBWBWBW" },
		{ "WBWBWBWB" },
		{ "BWBWBWBW" },
		{ "WBWBWBWB" },
		{ "BWBWBWBW" }
};

string whiteary[8] = {
		{ "BWBWBWBW" },
		{ "WBWBWBWB" },
		{ "BWBWBWBW" },
		{ "WBWBWBWB" },
		{ "BWBWBWBW" },
		{ "WBWBWBWB" },
		{ "BWBWBWBW" },
		{ "WBWBWBWB" }
};

string ary[50];

int white(int m, int n) {
	int count = 0;

	for (int i = m; i < m + 8; i++) {
		for (int j = n;j < n + 8; j++) {
			if (ary[i][j] != whiteary[i-m][j-n]) count++;
		}
	}
	return count;
}

int black(int m, int n) {
	int count = 0;

	for (int i = m; i < m + 8; i++) {
		for (int j = n;j < n + 8; j++) {
			if (ary[i][j] != blackary[i-m][j-n]) count++;
		}
	}
	return count;
}


int main() {

	int N, M; cin >> N >> M;

	for (int i = 0; i < N; i++) {
		cin >> ary[i];
	}

	int min = N*M;
	for (int i = 0; i < N - 7; i++) {
		for (int j = 0; j < M - 7; j++) {
			int temp = white(i, j) > black(i, j) ? black(i, j) : white(i, j);
			min = min > temp ? temp : min;
		}
	}

	cout << min << "\n";





	return 0;
}