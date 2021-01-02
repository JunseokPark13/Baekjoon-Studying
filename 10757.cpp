#include <iostream>

using namespace std;

string add(string& a, string& b) {
	int aSize = a.length();
	int bSize = b.length();

	int rest = 0;
	string result = "";

	while (aSize > 0 || bSize > 0) {
		int partA = 0;
		if (aSize > 0) {
			partA = a[--aSize] - '0';
			//cout << partA << " ";

		}
			
		int partB = 0;
		if (bSize > 0) {
			partB = b[--bSize] - '0';
			//cout << partB << " ";
		}
			
		//cout << rest << " ";
		int partR = partA + partB + rest;
		//cout << partR << "\n";
		rest = partR / 10;
		partR %= 10;

		result += (partR + '0');
	}
	
	string answer = "";
	if (rest > 0) answer = "1";

	for (int i = result.length() - 1; i >= 0; i--) {
		answer += result[i];
	}

	return answer;
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	string a, b;
	string sum = "0";
	cin >> a >> b;

	cout << add(a, b) << "\n";
}