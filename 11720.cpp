#include <iostream>

using namespace std;

int boj_11720()
{
	int tcase;
	int result = 0;
	string numbers;

	cin >> tcase;
	cin >> numbers;


	for (int i = 0; i < tcase;i++) {
		result += numbers.at(i) - '0';
	}

	cout << result << endl;

	return 0;
		
}
